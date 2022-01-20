"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliActions = void 0;
const action = (pkg, condition) => {
    return async (options) => {
        if (!condition || options[condition]) {
            const { default: task } = await Promise.resolve().then(() => require(pkg));
            return await task(options);
        }
        return false;
    };
};
exports.cliActions = [
    action('./version', 'version'),
    action('./analyze', '_'),
    action('./help')
];
