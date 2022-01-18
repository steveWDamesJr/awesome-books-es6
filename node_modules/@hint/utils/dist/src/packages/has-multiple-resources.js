"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasMultipleResources = void 0;
const enums_1 = require("./enums");
const hasMultipleResources = (resource, type) => {
    if (type === enums_1.ResourceType.hint) {
        return !resource.meta;
    }
    return false;
};
exports.hasMultipleResources = hasMultipleResources;
