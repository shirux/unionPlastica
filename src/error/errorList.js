/**
 * Within this file we created customized error classes
 * for each possible scenario within API request and responses
 */

/**
 * 400 Bad Request Error
 */
 class BadRequestError extends Error {
    constructor(step = "auth", ...params) {
        super(...params)
        this.status = 400;
        this.step = step;
        this.message = `Bad request. Status code: ${this.status}. Step: ${this.step}`
    }
}

/**
 * 401 Unauthorized Error
 */
class UnauthorizedError extends Error {
    constructor(step = "unknown",  ...params) {
        super(...params)
        this.status = 401;
        this.step = step;
        this.message = `Api is not authorized. Status code: ${this.status}. Step: ${this.step}`
    }
}

/**
 * 403 Forbidden Error
 */
class ForbiddenError extends Error {
    constructor(step = "auth", ...params) {
        super(...params)
        this.status = 403;
        this.step = step;
        this.message = `User is forbidden Status code: ${this.status}. Step: ${this.step}`
    }
}

/**
 * 404 Not Found Error
 */
class NotFoundError extends Error {
    constructor(step = "auth", ...params) {
        super(...params)
        this.status = 404;
        this.step = step;
        this.message = `Not found. Status code: ${this.status}. Step: ${this.step}`
    }
}

/**
 * 405 Method Not Allowed Error
 */
class MethodNotAllowedError extends Error {
    constructor(step = "auth", ...params) {
        super(...params)
        this.status = 405;
        this.step = step;
        this.message = `Method not allowed. Status code: ${this.status}. Step: ${this.step}`
    }
}

/**
 * 500 Server Error
 */
class ServerError extends Error {
    constructor (step = "", ...params) {
        super(...params)
        this.status = 500;
        this.step = step;
        this.message = `Server error. Status code: ${this.status}.`
        if (this.step) this.message += ` Step: ${this.step}`
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
