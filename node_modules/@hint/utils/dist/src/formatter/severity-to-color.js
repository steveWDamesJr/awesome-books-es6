"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.severityToColor = void 0;
const utils_types_1 = require("@hint/utils-types");
const chalk = require("chalk");
const severityToColor = (severity) => {
    switch (severity) {
        case utils_types_1.Severity.error:
            return chalk.red;
        case utils_types_1.Severity.warning:
            return chalk.yellow;
        case utils_types_1.Severity.hint:
            return chalk.hex('9451A0');
        case utils_types_1.Severity.information:
            return chalk.gray;
        default:
            return chalk.yellow;
    }
};
exports.severityToColor = severityToColor;
