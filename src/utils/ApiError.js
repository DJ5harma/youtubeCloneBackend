class ApiError extends Error {
    constructor(
        statsCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message); //override the message in super
        this.data = null;
        this.success = false;

        this.statsCode = statsCode;
        this.message = message;
        this.errors = errors;
        this.stack = stack;
        // if (stack.length > 0) {
        //     this.stack = stack;
        // }
        // else{
        //     Error.captureStackTrace(this, this.constructor)
        // }
    }
}
export default ApiError;
