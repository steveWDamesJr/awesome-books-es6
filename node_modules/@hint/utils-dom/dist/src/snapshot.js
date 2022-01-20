"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreReferences = exports.createHelpers = void 0;
const createHelpers = () => {
    let nextId = 1;
    const idSymbol = Symbol('webhint-node-id');
    const HTMLNS = 'http://www.w3.org/1999/xhtml';
    const getId = (node) => {
        if (!node[idSymbol]) {
            node[idSymbol] = nextId++;
        }
        return node[idSymbol];
    };
    const getLocation = (node) => {
        const __webhint = window.__webhint;
        if (__webhint && __webhint.nodeLocation) {
            return __webhint.nodeLocation(node);
        }
        return null;
    };
    const findNode = (id, list = document.childNodes) => {
        for (const node of list) {
            if (getId(node) === id) {
                return node;
            }
            else if (node.childNodes) {
                const match = findNode(id, node.childNodes);
                if (match) {
                    return match;
                }
            }
        }
        return null;
    };
    const isComment = (node) => {
        return node.nodeType === 8;
    };
    const isDoctype = (node) => {
        return node.nodeType === 10;
    };
    const isDocumentFragment = (node) => {
        return node.nodeType === 11;
    };
    const isElement = (node) => {
        return node.nodeType === 1;
    };
    const isTemplateElement = (element) => {
        return element.localName === 'template' && element.namespaceURI === HTMLNS;
    };
    const isText = (node) => {
        return node.nodeType === 3;
    };
    const snapshotAttr = (data, attr) => {
        data.attribs[attr.name] = attr.value;
        if (attr.namespaceURI !== null) {
            data['x-attribsNamespace'][attr.name] = attr.namespaceURI;
        }
        if (attr.prefix !== null) {
            data['x-attribsPrefix'][attr.name] = attr.prefix;
        }
        return data;
    };
    const snapshot = (node) => {
        const id = getId(node);
        const sourceCodeLocation = getLocation(node);
        if (isComment(node)) {
            return {
                data: node.nodeValue || '',
                id,
                next: null,
                parent: null,
                prev: null,
                sourceCodeLocation,
                type: 'comment'
            };
        }
        else if (isDoctype(node)) {
            return {
                data: node.nodeValue || '',
                id,
                name: '!doctype',
                next: null,
                nodeName: node.name,
                parent: null,
                prev: null,
                publicId: node.publicId,
                sourceCodeLocation,
                systemId: node.systemId,
                type: 'directive'
            };
        }
        else if (isDocumentFragment(node)) {
            return {
                children: Array.from(node.childNodes).map(snapshot),
                id,
                name: 'root',
                next: null,
                parent: null,
                prev: null,
                type: 'root'
            };
        }
        else if (isElement(node)) {
            const name = node.nodeName.toLowerCase();
            const attrs = Array.from(node.attributes).reduce(snapshotAttr, {
                attribs: {},
                'x-attribsNamespace': {},
                'x-attribsPrefix': {}
            });
            const children = isTemplateElement(node) ?
                [snapshot(node.content)] :
                Array.from(node.childNodes).map(snapshot);
            return {
                attribs: attrs.attribs,
                children,
                id,
                name,
                namespace: node.namespaceURI,
                next: null,
                parent: null,
                prev: null,
                sourceCodeLocation,
                type: name === 'script' || name === 'style' ? name : 'tag',
                'x-attribsNamespace': attrs['x-attribsNamespace'],
                'x-attribsPrefix': attrs['x-attribsPrefix']
            };
        }
        else if (isText(node)) {
            return {
                data: node.nodeValue || '',
                id,
                next: null,
                parent: null,
                prev: null,
                sourceCodeLocation,
                type: 'text'
            };
        }
        throw new Error(`Unexpected node type: ${node.nodeType}`);
    };
    const snapshotDocument = (doc = document) => {
        return {
            children: Array.from(doc.childNodes).map(snapshot),
            name: 'root',
            type: 'root',
            'x-mode': document.compatMode === 'BackCompat' ? 'quirks' : 'no-quirks'
        };
    };
    window.__webhint = Object.assign(Object.assign({}, window.__webhint), { findNode,
        snapshotDocument });
};
exports.createHelpers = createHelpers;
const restoreChildReferences = (node, index, arr, parent) => {
    node.next = arr[index + 1] || null;
    node.parent = parent;
    node.prev = arr[index - 1] || null;
    if ('children' in node) {
        node.children.forEach((n, i, a) => {
            restoreChildReferences(n, i, a, node);
        });
    }
};
const restoreReferences = (doc) => {
    doc.children.forEach((n, i, a) => {
        restoreChildReferences(n, i, a, doc);
    });
};
exports.restoreReferences = restoreReferences;
