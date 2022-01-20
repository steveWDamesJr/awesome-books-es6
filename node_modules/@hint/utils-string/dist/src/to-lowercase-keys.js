"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLowerCaseKeys = void 0;
const toLowerCaseKeys = (obj) => {
    const entries = Object.entries(obj);
    return entries.reduce((lowerCased, [key, value]) => {
        lowerCased[key.toLowerCase()] = value;
        return lowerCased;
    }, {});
};
exports.toLowerCaseKeys = toLowerCaseKeys;
