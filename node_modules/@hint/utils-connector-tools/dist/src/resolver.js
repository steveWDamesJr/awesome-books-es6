"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveUrl = void 0;
const url_1 = require("url");
const resolveUrl = (href, baseUrl) => {
    return new url_1.URL(href, baseUrl).href;
};
exports.resolveUrl = resolveUrl;
