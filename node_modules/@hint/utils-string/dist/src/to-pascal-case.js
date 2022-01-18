"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPascalCase = void 0;
const toPascalCase = (value) => {
    return value.split('-').reduce((accu, w) => {
        let current = accu;
        current += w.length ? `${w.charAt(0).toUpperCase()}${w.substr(1).toLowerCase()}` : '';
        return current;
    }, '');
};
exports.toPascalCase = toPascalCase;
