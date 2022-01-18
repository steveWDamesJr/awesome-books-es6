"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setVariable = exports.getVariable = void 0;
const getVariable = (name) => {
    return process.env[name];
};
exports.getVariable = getVariable;
const setVariable = (name, value) => {
    process.env[name] = value;
};
exports.setVariable = setVariable;
