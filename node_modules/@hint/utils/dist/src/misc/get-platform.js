"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlatform = void 0;
const isWsl = require('is-wsl');
const getPlatform = () => {
    return isWsl ? 'wsl' : process.platform;
};
exports.getPlatform = getPlatform;
