const { UnauthorizedError, ServerError, BadRequestError, ForbiddenError, NotFoundError, MethodNotAllowedError } = require('./errorList')

/**
 * Por error capturado, personaliza la excepción para generar información más precisa.
 * Cambia errores de Axios (Poca info) por unos más precisos.
 * @param {Error} err Error
 * @param {String} step Paso donde fallo
 */
const handleError = (err, step) => {
    console.log(err)
    let status;
    if (err.response) status = err.response.status;
    else if (err.status) status = err.status;
    
    if (status) {
        switch (status) {
            case 400:
                throw new BadRequestError(err, step);
            case 401:
                throw new UnauthorizedError(err, step)
            case 403:
                throw new ForbiddenError(err, step)
            case 404:
                throw new NotFoundError(err, step);
            case 405:
                throw new MethodNotAllowedError(err, step);
            default:
                throw new ServerError(err, step);
        }
    }
    throw new ServerError(err, step)
}   

module.exports = handleError;
