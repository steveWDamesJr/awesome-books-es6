"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceError = void 0;
class ResourceError extends Error {
    constructor(error, status) {
        const message = typeof error === 'string' ? error : error.message;
        super(message);
        this.name = 'ResourceError';
        this.status = status;
    }
}
exports.ResourceError = ResourceError;
