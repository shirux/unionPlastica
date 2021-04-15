const axios = require('axios');
const config = require('../data/config')
const handleError = require('./error/error')
const { ServerError } = require('./error/error')
const Log = require('./log');

/**
 * Construye una petición POST en axios para autenticarse ante el API Server
 * 
 * En caso de fallos levanta un error. Puede fallar en los siguientes casos:
 * 1. No encuentra la url para conectarse
 * 2. No está correctamente parametrizado el cliente
 * 3. No hay internet
 * 
 * @returns Token de acceso
 */
const authenticate = async() => {
    // Define la variable bodyParams a partir del archivo config
    const bodyParams = config.login.bodyParams

    try {
        // Petición POST, si el status es 200, retorna el access_token, en caso contrario, tira error
        const response = await axios.post(`${config.devUrl}${config.login.url}`, bodyParams);
        if (response) {
            if (response.status === 200) {
                Log.registerAction()
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