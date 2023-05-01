"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandlingMidlleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    if (err.message == 'fail') {
        res.status(err.statusCode).json({ errors: err.status, errorMessage: err.message });
    }
    else {
        res.status(err.statusCode).json({
            status: err.status,
        });
    }
};
exports.default = errorHandlingMidlleware;
//# sourceMappingURL=errorHandlingMiddleware.js.map