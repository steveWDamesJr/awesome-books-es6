"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@hint/utils");
const options_1 = require("./options");
exports.default = (actions) => {
    const entries = Object.entries(actions);
    const showHelp = entries.reduce((result, [key, value]) => {
        if (key === 'help' && value) {
            return true;
        }
        if (typeof value === 'boolean' && value) {
            return false;
        }
        if (Array.isArray(value) && value.length > 0) {
            return false;
        }
        return result && true;
    }, true);
    if (!showHelp) {
        return Promise.resolve(false);
    }
    utils_1.logger.log(options_1.options.generateHelp());
    return Promise.resolve(true);
};
