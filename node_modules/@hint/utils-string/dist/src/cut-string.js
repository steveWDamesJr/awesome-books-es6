"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cutString = void 0;
const cutString = (txt, length = 50) => {
    if (txt.length <= length) {
        return txt;
    }
    const partialLength = Math.floor(length - 3) / 2;
    return `${txt.substring(0, partialLength)} … ${txt.substring(txt.length - partialLength, txt.length)}`;
};
exports.cutString = cutString;
