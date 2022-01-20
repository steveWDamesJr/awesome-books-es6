"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCSSLocationFromNode = void 0;
const setValuePosition = (node, start, end) => {
    const betweenSplit = node.raws.between ? node.raws.between.split('\n') : [''];
    end.line = start.line + betweenSplit.length - 1;
    end.column = betweenSplit.length === 1 ?
        start.column + node.prop.length + betweenSplit[0].length + node.value.length :
        betweenSplit[betweenSplit.length - 1].length + node.value.length + 1;
    start.line = end.line;
    start.column = end.column - node.value.length;
};
const getCSSLocationFromNode = (node, options = {}) => {
    if (!node.source || !node.source.start) {
        return undefined;
    }
    const start = Object.assign({}, node.source.start);
    const end = {
        column: start.column,
        line: start.line
    };
    if (node.type === 'decl') {
        if (options.isValue) {
            setValuePosition(node, start, end);
        }
        else {
            end.line = start.line;
            end.column = start.column + node.prop.length;
        }
    }
    return {
        column: start.column - 1,
        endColumn: end.column - 1,
        endLine: end.line - 1,
        line: start.line - 1
    };
};
exports.getCSSLocationFromNode = getCSSLocationFromNode;
