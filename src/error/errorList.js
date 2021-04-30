/**
 * Within this file we created customized error classes
 * for each possible scenario within API request and responses
 */

/**
 * 400 Bad Request Error
 */
 class BadRequestError extends Error {
    constructor(err, step = "auth", ...params) {
        super(...params)
        this.status = 400;
        this.step = step;
        this.message = `Bad request. Status code: ${this.status}. Step: ${this.step}`
        try {
            this.data = []
            if (err.response && err.response.data && err.response.data.data) this.data = err.response.data.data
            else if (err.data) this.data = err.data
        } catch (err) {
            this.data = []
        }
    }
}

/**
 * 401 Unauthorized Error
 */
class UnauthorizedError extends Error {
    constructor(err, step = "unknown",  ...params) {
        super(...params)
        this.status = 401;
        this.step = step;
        this.message = `Api is not authorized. Status code: ${this.status}. Step: ${this.step}`
        try {
            this.data = []
            if (err.response && err.response.data && err.response.data.data) this.data = err.response.data.data
            else if (err.data) this.data = err.data
        } catch (err) {
            this.data = []
        }
    }
}

/**
 * 403 Forbidden Error
 */
class ForbiddenError extends Error {
    constructor(err, step = "auth", ...params) {
        super(...params)
        this.status = 403;
        this.step = step;
        this.message = `User is forbidden Status code: ${this.status}. Step: ${this.step}`
        try {
            this.data = []
            if (err.response && err.response.data && err.response.data.data) this.data = err.response.data.data
            else if (err.data) this.data = err.data
        } catch (err) {
            this.data = []
        }
    }
}

/**
 * 404 Not Found Error
 */
class NotFoundError extends Error {
    constructor(err, step = "auth", ...params) {
        super(...params)
        this.status = 404;
        this.step = step;
        this.message = `Not found. Status code: ${this.status}. Step: ${this.step}`
        try {
            this.data = []
            if (err.response && err.response.data && err.response.data.data) this.data = err.response.data.data
            else if (err.data) this.data = err.data
        } catch (err) {
            this.data = []
        }
    }
}

/**
 * 405 Method Not Allowed Error
 */
class MethodNotAllowedError extends Error {
    constructor(err, step = "auth", ...params) {
        super(...params)
        this.status = 405;
        this.step = step;
        this.message = `Method not allowed. Status code: ${this.status}. Step: ${this.step}`
        try {
            this.data = []
            if (err.response && err.response.data && err.response.data.data) this.data = err.response.data.data
            else if (err.data) this.data = err.data
        } catch (err) {
            this.data = []
        }
    }
}

/**
 * 500 Server Error
 */
class ServerError extends Error {
    constructor (err, step = "", ...params) {
        super(...params)
        this.status = 500;
        this.step = step;
        this.message = `Server error. Status code: ${this.status}.`
        if (this.step) this.message += ` Step: ${this.step}`
        try {
            this.data = []
            if (err.response && err.response.data && err.response.data.data) this.data = err.response.data.data
            else if (err.data) this.data = err.data
        } catch (err) {
            this.data = []
        }
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
