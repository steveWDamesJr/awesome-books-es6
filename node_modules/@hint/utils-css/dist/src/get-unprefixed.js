"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnprefixed = void 0;
const getUnprefixed = (prop) => {
    return prop.replace(/^-\w+-/, '');
};
exports.getUnprefixed = getUnprefixed;
