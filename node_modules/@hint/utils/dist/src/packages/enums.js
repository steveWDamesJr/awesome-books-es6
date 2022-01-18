"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceType = exports.ResourceErrorStatus = void 0;
var ResourceErrorStatus;
(function (ResourceErrorStatus) {
    ResourceErrorStatus["DependencyError"] = "DependencyError";
    ResourceErrorStatus["NotCompatible"] = "NotCompatible";
    ResourceErrorStatus["NotFound"] = "NotFound";
    ResourceErrorStatus["Unknown"] = "Unknown";
})(ResourceErrorStatus = exports.ResourceErrorStatus || (exports.ResourceErrorStatus = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["configuration"] = "configuration";
    ResourceType["connector"] = "connector";
    ResourceType["formatter"] = "formatter";
    ResourceType["parser"] = "parser";
    ResourceType["hint"] = "hint";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
