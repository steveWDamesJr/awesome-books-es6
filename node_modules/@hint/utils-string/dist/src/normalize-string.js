"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeString = void 0;
const normalizeString = (value, defaultValue) => {
    if (typeof value === 'undefined' || value === null) {
        return typeof defaultValue !== 'undefined' ? defaultValue : null;
    }
    return value.toLowerCase().trim();
};
exports.normalizeString = normalizeString;
