"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAbsolutePaths = void 0;
const fs = require("fs");
const path = require("path");
const toAbsolutePaths = (config, configRoot) => {
    if (!config) {
        return null;
    }
    const stat = fs.statSync(configRoot);
    const configPath = stat.isDirectory() ? configRoot : path.dirname(configRoot);
    if (!configPath) {
        return config;
    }
    const resolve = (value) => {
        if (!value.startsWith('.')) {
            return value;
        }
        return path.resolve(configPath, value);
    };
    if (config.connector) {
        if (typeof config.connector === 'string') {
            config.connector = resolve(config.connector);
        }
        else {
            config.connector.name = resolve(config.connector.name);
        }
    }
    if (config.extends) {
        config.extends = config.extends.map(resolve);
    }
    if (config.formatters) {
        config.formatters = config.formatters.map(resolve);
    }
    if (config.parsers) {
        config.parsers = config.parsers.map(resolve);
    }
    if (config.hints) {
        const hints = Array.isArray(config.hints) ? config.hints : Object.keys(config.hints);
        if (Array.isArray(config.hints)) {
            config.hints = hints.map((currentHint) => {
                if (typeof currentHint === 'string') {
                    return resolve(currentHint);
                }
                currentHint[0] = resolve(currentHint[0]);
                return currentHint;
            });
        }
        else {
            const transformedHints = hints.reduce((newHints, currentHint) => {
                const newHint = resolve(currentHint);
                newHints[newHint] = config.hints[currentHint];
                return newHints;
            }, {});
            config.hints = transformedHints;
        }
    }
    return config;
};
exports.toAbsolutePaths = toAbsolutePaths;
