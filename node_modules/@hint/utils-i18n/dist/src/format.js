"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = void 0;
var format = function (text, substitutions) {
    if (typeof substitutions === 'undefined') {
        return text;
    }
    var substs = Array.isArray(substitutions) ? substitutions : [substitutions];
    var substitutionsRegex = /(\$(\d+))|(\${2,})/g;
    var result = text.replace(substitutionsRegex, function (fullMatch, substitution, substitutionIndex, dollarSymbols) {
        if (typeof substitutionIndex !== 'undefined') {
            return substs[parseInt(substitutionIndex, 10) - 1];
        }
        if (typeof dollarSymbols !== 'undefined') {
            return ''.padStart(dollarSymbols.length - 1, '$');
        }
        return fullMatch;
    });
    return result;
};
exports.format = format;
