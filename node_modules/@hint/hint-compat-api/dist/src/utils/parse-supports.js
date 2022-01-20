"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSupports = void 0;
class InvalidInputError extends Error {
    constructor(message) {
        super(message);
    }
}
const isDeclaration = (token) => {
    return typeof token !== 'string';
};
const tokenizeDeclarationValue = (data, prop, start) => {
    let depth = 0;
    let temp = '';
    for (let i = start; i < data.length; i++) {
        const char = data[i];
        if (char === '(') {
            depth++;
        }
        else if (char === ')') {
            depth--;
        }
        if (depth >= 0) {
            temp += char;
        }
        else {
            return [i, { prop, value: temp.trim() }];
        }
    }
    throw new InvalidInputError('Invalid declaration value');
};
const tokenizeParams = (params) => {
    const tokens = [];
    for (let i = 0, temp = ''; i < params.length; i++) {
        const char = params[i].trim();
        let token;
        switch (char) {
            case '':
                continue;
            case '(':
            case ')':
                if (temp) {
                    if (temp !== 'and' && temp !== 'or' && temp !== 'not') {
                        throw new InvalidInputError('Invalid @supports format');
                    }
                    tokens.push(temp);
                    temp = '';
                }
                tokens.push(char);
                continue;
            case ':':
                [i, token] = tokenizeDeclarationValue(params, temp, i + 1);
                i -= 1;
                temp = '';
                tokens.push(token);
                break;
            default:
                temp += char;
        }
    }
    return tokens.filter((token, i) => {
        return !((token === '(' && isDeclaration(tokens[i + 1])) ||
            (token === ')' && isDeclaration(tokens[i - 1])));
    });
};
const parseParams = (params) => {
    const tokens = tokenizeParams(params);
    const groups = [{
            nodes: [],
            type: 'and'
        }];
    for (const token of tokens) {
        switch (token) {
            case '(':
                groups.unshift({
                    nodes: [],
                    type: 'and'
                });
                groups[1].nodes.push(groups[0]);
                break;
            case ')':
                groups.shift();
                break;
            case 'and':
            case 'or':
            case 'not':
                groups[0].type = token;
                break;
            default:
                groups[0].nodes.push(token);
        }
    }
    if (groups.length !== 1) {
        throw new InvalidInputError('Mis-matched parenthesis');
    }
    return groups[0];
};
const parseSupports = (params) => {
    try {
        return parseParams(params);
    }
    catch (e) {
        if (e instanceof InvalidInputError) {
            return null;
        }
        throw e;
    }
};
exports.parseSupports = parseSupports;
