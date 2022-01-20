"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVendorPrefix = void 0;
const getVendorPrefix = (prop) => {
    const match = prop.match(/^(-\w+-)/);
    if (match) {
        return match[0];
    }
    return '';
};
exports.getVendorPrefix = getVendorPrefix;
