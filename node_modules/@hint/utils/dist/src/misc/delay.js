"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
const delay = (millisecs) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecs);
    });
};
exports.delay = delay;
