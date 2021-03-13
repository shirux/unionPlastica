const axios = require('axios');
const config = require('../data/config')
const handleError = require('./error/error')
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
                throw new ServerError("auth");
            }
        }
    } catch (err) {
        handleError(err, "auth")
    }
}

module.exports = authenticate;