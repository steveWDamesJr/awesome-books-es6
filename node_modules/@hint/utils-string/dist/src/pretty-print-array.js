"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettyPrintArray = void 0;
const prettyPrintArray = (array) => {
    const items = Array.from(array);
    if (!items || items.length === 0) {
        return '';
    }
    const firstElement = items.shift();
    if (items.length === 0) {
        return `'${firstElement}'`;
    }
    if (items.length === 1) {
        return `'${firstElement}' and '${items.pop()}'`;
    }
    const lastElement = items.pop();
    return `'${firstElement}', '${items.join('\', \'')}', and '${lastElement}'`;
};
exports.prettyPrintArray = prettyPrintArray;
