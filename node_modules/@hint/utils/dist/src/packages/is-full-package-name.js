"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFullPackageName = void 0;
const isFullPackageName = (packageName, type) => {
    const parts = packageName.split('/');
    const name = parts.length >= 2 && parts[0].startsWith('@') ? parts[1] : packageName;
    if (parts[0] === '@hint') {
        return name.startsWith(`${type}-`);
    }
    return name.startsWith(`webhint-${type}-`);
};
exports.isFullPackageName = isFullPackageName;
