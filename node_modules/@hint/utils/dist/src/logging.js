"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warn = exports.log = exports.error = void 0;
const error = (message, ...optionalParams) => {
    console.error(message, ...optionalParams);
};
exports.error = error;
const log = (message, ...optionalParams) => {
    console.log(message, ...optionalParams);
};
exports.log = log;
const warn = (message, ...optionalParams) => {
    console.warn(message, ...optionalParams);
};
exports.warn = warn;
