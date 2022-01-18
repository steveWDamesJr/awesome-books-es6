"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadPackage = void 0;
const loadPackage = (pathString) => {
    return require(`${pathString}/package.json`);
};
exports.loadPackage = loadPackage;
