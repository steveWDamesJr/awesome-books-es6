"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHTMLCodeSnippet = void 0;
const getOpening = (html) => {
    const openingTagRegex = /<([^>]+)>/gi;
    const exec = openingTagRegex.exec(html);
    if (!exec) {
        return html;
    }
    return exec[0];
};
const getHTMLCodeSnippet = (element, threshold = 100) => {
    const outerHTML = element.outerHTML.replace(/[\t]/g, '    ');
    if (outerHTML.length <= threshold) {
        return outerHTML;
    }
    return getOpening(outerHTML);
};
exports.getHTMLCodeSnippet = getHTMLCodeSnippet;
