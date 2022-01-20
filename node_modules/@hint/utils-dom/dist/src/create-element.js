"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElement = void 0;
const htmlanchorelement_1 = require("./elements/htmlanchorelement");
const htmlbodyelement_1 = require("./elements/htmlbodyelement");
const htmlhtmlelement_1 = require("./elements/htmlhtmlelement");
const htmlelement_1 = require("./htmlelement");
const getElementType = (name) => {
    switch (name) {
        case 'a':
            return htmlanchorelement_1.HTMLAnchorElement;
        case 'body':
            return htmlbodyelement_1.HTMLBodyElement;
        case 'html':
            return htmlhtmlelement_1.HTMLHtmlElement;
        default:
            return htmlelement_1.HTMLElement;
    }
};
const createElement = (name, owner, data) => {
    const ElementType = getElementType(name);
    return new ElementType(data || {
        attribs: {},
        children: [],
        name: name.toLowerCase(),
        namespace: 'http://www.w3.org/1999/xhtml',
        next: null,
        parent: null,
        prev: null,
        type: 'tag',
        'x-attribsNamespace': {},
        'x-attribsPrefix': {}
    }, owner);
};
exports.createElement = createElement;
