"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullCSSCodeSnippet = exports.getCSSCodeSnippet = void 0;
const getNodeCodeSnippet = (node) => {
    switch (node.type) {
        case 'rule':
            return `${node.selector.split(/,\s*/).join(`,\n`)}`;
        case 'decl':
            return `${node.prop}: ${node.value}`;
        case 'atrule':
            return `@${node.name} ${node.params}`;
        case 'comment':
            return `/* ${node.text} */`;
        default:
            return '';
    }
};
const getCSSCodeSnippet = (node) => {
    const hasChildren = 'nodes' in node && node.nodes && node.nodes.length;
    const defaultSuffix = node.type === 'comment' ? '' : ';';
    const suffix = hasChildren ? ' { }' : defaultSuffix;
    let result = `${getNodeCodeSnippet(node)}${suffix}`;
    let parent = node.parent;
    while (parent && parent.type !== 'root') {
        const content = result.replace(/^/gm, '    ');
        result = `${getNodeCodeSnippet(parent)} {\n${content}\n}`;
        parent = parent.parent;
    }
    return result;
};
exports.getCSSCodeSnippet = getCSSCodeSnippet;
const getChildrenCodeSnippet = (children) => {
    let result = '';
    for (const child of children) {
        if ('nodes' in child && child.nodes && child.nodes.length) {
            result += `${getNodeCodeSnippet(child)} {
${getChildrenCodeSnippet(child.nodes).replace(/^/gm, '    ')}
}`;
        }
        else {
            result += `${getNodeCodeSnippet(child)}${child.type === 'comment' ? '' : ';'}\n`;
        }
    }
    return result.trim();
};
const getFullCSSCodeSnippet = (node) => {
    const children = 'nodes' in node && node.nodes;
    const defaultSuffix = node.type === 'comment' ? '' : ';';
    let result;
    let parent = node.parent;
    if (parent && parent.type !== 'root') {
        const children = parent.nodes;
        const content = getChildrenCodeSnippet(children);
        result = content;
    }
    else if (children) {
        result = `${getNodeCodeSnippet(node)} {
${getChildrenCodeSnippet(children).replace(/^/gm, '    ')}
}`;
    }
    else {
        result = `${getNodeCodeSnippet(node)}${defaultSuffix}`;
    }
    while (parent && parent.type !== 'root') {
        const content = result.trim().replace(/^/gm, '    ');
        result = `${getNodeCodeSnippet(parent)} {\n${content}\n}`;
        parent = parent.parent;
    }
    return result;
};
exports.getFullCSSCodeSnippet = getFullCSSCodeSnippet;
