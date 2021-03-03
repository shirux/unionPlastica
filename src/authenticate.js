const axios = require('axios');
const config = require('../data/config')
const { UnauthorizedError, ServerError, BadRequestError, ForbiddenError, NotFoundError, MethodNotAllowedError } = require('./error/error')

const authenticate = async() => {
    const bodyParams = config.login.bodyParams
    try {
        const response = await axios.post(`${config.devUrl}${config.login.url}`, bodyParams);
        if (response) {
            if (response.status === 200) {
                return response.data.access_token;
            }
            else {
                throw new ServerError();
            }
        }
    } catch (err) {
        if (err.response) {
            switch (err.response.status) {
                case 400:
                    throw new BadRequestError();
                case 401:
                    throw new UnauthorizedError();
                case 403:
                    throw new ForbiddenError();
                case 404:
                    throw new NotFoundError();
                case 405:
                    throw new MethodNotAllowedError();
                default:
                    throw new ServerError();
            }
        }
        throw new ServerError();
    }
}

module.exports = authenticate;