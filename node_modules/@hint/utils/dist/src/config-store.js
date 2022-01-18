"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = exports.get = void 0;
const Configstore = require("configstore");
const config = new Configstore('hint');
const get = (name) => {
    return config.get(name);
};
exports.get = get;
const set = (name, value) => {
    config.set(name, value);
    return value;
};
exports.set = set;
