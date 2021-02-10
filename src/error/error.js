class UnauthorizedError extends Error {
    constructor(status = 400, ...params) {
        super(...params)
        this.status = status;
        this.message = "Api is not authorized"
    }
    
}

module.exports = UnauthorizedError