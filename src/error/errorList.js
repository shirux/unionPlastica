class UnauthorizedError extends Error {
    constructor(step = "unknown", ...params) {
        super(...params)
        this.status = 401;
        this.step = step;
        this.message = "Api is not authorized"
    }
}

class BadRequestError extends Error {
    constructor(step = "auth", ...params) {
        super(...params)
        this.status = 400;
        this.step = step;
        this.message = "Bad request"
    }
}

class ForbiddenError extends Error {
    constructor(step = "auth", ...params) {
        super(...params)
        this.status = 403;
        this.step = step;
        this.message = "User is forbidden"
    }
}

class NotFoundError extends Error {
    constructor(step = "auth", ...params) {
        super(...params)
        this.status = 404;
        this.step = step;
        this.message = "Not found"
    }
}

class MethodNotAllowedError extends Error {
    constructor(step = "auth", ...params) {
        super(...params)
        this.status = 405;
        this.step = step;
        this.message = "Method not allowed"
    }
}

class ServerError extends Error {
    constructor (step = "auth", ...params) {
        super(...params)
        this.status = 500;
        this.step = step;
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
