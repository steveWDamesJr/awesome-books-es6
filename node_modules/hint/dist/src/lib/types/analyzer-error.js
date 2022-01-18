"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyzerError = void 0;
const error_status_1 = require("../enums/error-status");
class AnalyzerError extends Error {
    constructor(error, status, items) {
        const message = typeof error === 'string' ? error : error.message;
        super(message);
        this.name = 'AnalyzerError';
        this.status = status;
        switch (status) {
            case error_status_1.AnalyzerErrorStatus.ResourceError:
                this.resources = items;
                break;
            case error_status_1.AnalyzerErrorStatus.HintError:
                this.invalidHints = items;
                break;
            default:
                break;
        }
    }
}
exports.AnalyzerError = AnalyzerError;
