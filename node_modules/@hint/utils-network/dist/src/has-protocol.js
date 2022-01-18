"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasProtocol = void 0;
const url_1 = require("url");
const hasProtocol = (resource, protocol) => {
    return new url_1.URL(resource).protocol === protocol;
};
exports.hasProtocol = hasProtocol;
