"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCachedValue = void 0;
const cache = new Map();
const _hasCachedValue = (key, browsers) => {
    return cache.has(key) && cache.get(key).has(browsers);
};
const _getCachedValue = (key, browsers) => {
    return cache.has(key) && cache.get(key).get(browsers) || null;
};
const _setCachedValue = (key, browsers, value) => {
    if (!cache.has(key)) {
        cache.set(key, new Map());
    }
    cache.get(key).set(browsers, value);
    return value;
};
const getCachedValue = (key, browsers, getValue) => {
    if (_hasCachedValue(key, browsers)) {
        return _getCachedValue(key, browsers);
    }
    return _setCachedValue(key, browsers, getValue());
};
exports.getCachedValue = getCachedValue;
