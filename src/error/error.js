class UnauthorizedError extends Error {
    constructor(status = 401, ...params) {
        super(...params)
        this.status = status;
        this.message = "Api is not authorized"
    }
}

class BadRequestError extends Error {
    constructor(status = 400, ...params) {
        super(...params)
        this.status = status;
        this.message = "Bad request"
    }
}

class ForbiddenError extends Error {
    constructor(status = 403, ...params) {
        super(...params)
        this.status = status;
        this.message = "User is forbidden"
    }
}

class NotFoundError extends Error {
    constructor(status = 404, ...params) {
        super(...params)
        this.status = status;
        this.message = "Not found"
    }
}

class MethodNotAllowedError extends Error {
    constructor(status = 405, ...params) {
        super(...params)
        this.status = status;
        this.message = "Method not allowed"
    }
}

class ServerError extends Error {
    constructor (status = 500, ...params) {
        super(...params)
        this.status = status;
        this.message = "Server error"
    }
}

module.exports = {
    ServerError, 
    MethodNotAllowedError,
    UnauthorizedError,
    NotFoundError,
    ForbiddenError, 
    BadRequestError
}
