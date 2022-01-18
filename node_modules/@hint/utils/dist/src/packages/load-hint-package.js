"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadHintPackage = void 0;
const loadHintPackage = () => {
    if (process.env.webpack) {
        return require('../../../../hint/package.json');
    }
    return require(`hint/package.json`);
};
exports.loadHintPackage = loadHintPackage;
