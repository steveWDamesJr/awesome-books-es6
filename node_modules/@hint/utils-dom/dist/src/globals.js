"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateGlobals = void 0;
const cssstyledeclaration_1 = require("./cssstyledeclaration");
const htmldocument_1 = require("./htmldocument");
const htmlelement_1 = require("./htmlelement");
const htmlbodyelement_1 = require("./elements/htmlbodyelement");
const htmlhtmlelement_1 = require("./elements/htmlhtmlelement");
const node_1 = require("./node");
const getComputedStyle = (element) => {
    return element.getComputedStyle();
};
const populateGlobals = (context, document) => {
    document.defaultView = context;
    const globals = {
        CSSStyleDeclaration: cssstyledeclaration_1.CSSStyleDeclaration,
        document,
        Document: htmldocument_1.HTMLDocument,
        Element: htmlelement_1.HTMLElement,
        getComputedStyle,
        HTMLBodyElement: htmlbodyelement_1.HTMLBodyElement,
        HTMLDocument: htmldocument_1.HTMLDocument,
        HTMLElement: htmlelement_1.HTMLElement,
        HTMLHtmlElement: htmlhtmlelement_1.HTMLHtmlElement,
        NamedNodeMap: Array,
        Node: node_1.Node,
        NodeList: Array,
        self: context,
        top: context,
        window: context
    };
    for (const global of Object.keys(globals)) {
        try {
            context[global] = globals[global];
        }
        catch (e) {
        }
    }
    return context;
};
exports.populateGlobals = populateGlobals;
