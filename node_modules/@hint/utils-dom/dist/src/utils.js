"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureExpectedParentNodes = void 0;
const EXPECTED_PARENTS = new Map([
    ['col', 'colgroup'],
    ['dd', 'dl'],
    ['dt', 'dl'],
    ['legend', 'fieldset'],
    ['li', 'ul'],
    ['optgroup', 'select'],
    ['option', 'select'],
    ['tbody', 'table'],
    ['td', 'tr'],
    ['tfoot', 'table'],
    ['th', 'tr'],
    ['thead', 'table'],
    ['tr', 'table']
]);
const appendElement = (parent, element) => {
    if (element.next) {
        element.next.prev = parent;
    }
    if (element.prev) {
        element.prev.next = element.next;
    }
    if (element.parent) {
        element.parent.children = element.parent.children.filter((e) => {
            return e !== element;
        });
    }
    const last = parent.children[parent.children.length - 1];
    last.next = element;
    element.next = null;
    element.prev = last;
    element.parent = parent;
    parent.children.push(element);
};
const wrapElement = (element, wrapperName) => {
    const parent = {
        attribs: {},
        children: [element],
        name: wrapperName,
        namespace: 'http://www.w3.org/1999/xhtml',
        next: element.next,
        parent: element.parent,
        prev: element.prev,
        type: 'tag',
        'x-attribsNamespace': {},
        'x-attribsPrefix': {}
    };
    if (element.parent) {
        element.parent.children = element.parent.children.map((child) => {
            return child === element ? parent : child;
        });
    }
    if (element.next) {
        element.next.prev = parent;
    }
    if (element.prev) {
        element.prev.next = parent;
    }
    element.parent = parent;
    element.next = null;
    element.prev = null;
    return parent;
};
const ensureExpectedParentNodes = (document) => {
    const html = document.children.find((child) => {
        return child.type === 'tag' && child.name === 'html';
    });
    const body = html.children.find((child) => {
        return child.type === 'tag' && child.name === 'body';
    });
    const topElements = body.children.filter((c) => {
        return c.type === 'tag';
    });
    let parent = null;
    for (const element of topElements) {
        const expectedParent = EXPECTED_PARENTS.get(element.name);
        if (expectedParent) {
            if ((parent === null || parent === void 0 ? void 0 : parent.name) === expectedParent) {
                appendElement(parent, element);
            }
            else {
                parent = wrapElement(element, expectedParent);
                topElements.push(parent);
            }
        }
    }
};
exports.ensureExpectedParentNodes = ensureExpectedParentNodes;
