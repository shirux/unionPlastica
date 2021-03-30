const axios = require('axios');
const config = require('../data/config')
const handleError = require('./error/error')
const { ServerError } = require('./error/error')

/**
 * Build an axios post request to authenticate against API server.
 * @returns access_token
 */
const authenticate = async() => {
    // Retrieve bodyParams from config file
    const bodyParams = config.login.bodyParams

    try {
        // POST request, if status is 200, return access_token, otherwise throw a serverError
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