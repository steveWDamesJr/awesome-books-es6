"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = void 0;
const path = require("path");
const debugging = (process.argv.includes('--debug'));
const debugTarget = process.env.DEBUG || 'hint:*';
if (!debugging && process.env.DEBUG) {
    delete process.env.DEBUG;
}
const d = require("debug");
if (debugging) {
    d.enable(debugTarget);
}
const debug = (filePath) => {
    let output = path.basename(filePath, path.extname(filePath));
    let dirPath = path.dirname(filePath);
    let currentDir = path.basename(dirPath);
    while (currentDir && currentDir !== 'lib') {
        if (currentDir !== output) {
            output = `${currentDir}:${output}`;
        }
        dirPath = path.join(dirPath, '..');
        currentDir = path.basename(dirPath);
    }
    if (output === 'hint') {
        output = 'engine';
    }
    return d(`hint:${output}`);
};
exports.debug = debug;
