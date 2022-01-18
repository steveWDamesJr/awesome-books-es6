"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamelCase = void 0;
const toCamelCase = (value) => {
    return value.split('-').reduce((accu, w) => {
        if (!accu.length) {
            return w.toLocaleLowerCase();
        }
        let current = accu;
        current += w.length ? `${w.charAt(0).toUpperCase()}${w.substr(1).toLowerCase()}` : '';
        return current;
    }, '');
};
exports.toCamelCase = toCamelCase;
