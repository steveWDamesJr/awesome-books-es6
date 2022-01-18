"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveIgnore = void 0;
const resolveIgnore = (defaults, options) => {
    const ignore = new Set(defaults);
    if (options && options.ignore) {
        for (const entry of options.ignore) {
            ignore.add(entry);
        }
    }
    if (options && options.enable) {
        for (const entry of options.enable) {
            ignore.delete(entry);
        }
    }
    return ignore;
};
exports.resolveIgnore = resolveIgnore;
