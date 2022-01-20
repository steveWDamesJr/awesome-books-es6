"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DEFAULT_HINT_LEVEL = 'default';
const shortHandHintPrefixes = {
    '-': 'off',
    '?': 'warning'
};
const normalizeHint = (hint) => {
    let hintLevel;
    let hintName = '';
    for (const prefix in shortHandHintPrefixes) {
        if (hint.startsWith(prefix)) {
            hintLevel = shortHandHintPrefixes[prefix];
            hintName = hint.substr(1, hint.length - 1);
            break;
        }
    }
    if (!hintLevel) {
        [hintName, hintLevel] = hint.split(':');
        hintLevel = hintLevel || DEFAULT_HINT_LEVEL;
    }
    return {
        hintLevel,
        hintName
    };
};
function normalizeHints(hints) {
    if (!Array.isArray(hints)) {
        return hints;
    }
    const result = {};
    for (const hint of hints) {
        if (typeof hint === 'string') {
            const { hintName, hintLevel } = normalizeHint(hint);
            result[hintName] = hintLevel;
        }
        else if (Array.isArray(hint)) {
            const [hintKey, hintConfig] = hint;
            const { hintName, hintLevel } = normalizeHint(hintKey);
            if (hintConfig) {
                result[hintName] = [hintLevel, hintConfig];
            }
            else {
                result[hintName] = [hintLevel, {}];
            }
        }
        else {
            throw new Error(`Invalid hint type specified: "${hint}". Arrays and objects are supported.`);
        }
    }
    return result;
}
exports.default = normalizeHints;
