const { UnauthorizedError, ServerError, BadRequestError, ForbiddenError, NotFoundError, MethodNotAllowedError } = require('./errorList')

const handleError = (err, step) => {
    if (err.response) {
        switch (err.response.status) {
            case 400:
                throw new BadRequestError(step);
            case 401:
                throw new UnauthorizedError(step)
            case 403:
                throw new ForbiddenError(step)
            case 404:
                throw new NotFoundError(step);
            case 405:
                throw new MethodNotAllowedError(step);
            default:
                throw new ServerError(step);
        }
    }
    throw new ServerError(step);
}   

module.exports = handleError;
