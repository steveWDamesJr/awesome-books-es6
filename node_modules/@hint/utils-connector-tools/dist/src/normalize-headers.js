"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeHeaders = void 0;
const normalizeHeaders = (headers) => {
    if (headers) {
        return Object.keys(headers).reduce((result, key) => {
            var _a;
            const values = new Set((_a = headers[key]) === null || _a === void 0 ? void 0 : _a.split('\n'));
            result[key.toLowerCase().trim()] = Array.from(values).join(', ');
            return result;
        }, {});
    }
    return null;
};
exports.normalizeHeaders = normalizeHeaders;
