"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHTMLDocument = void 0;
const parse5 = require("parse5");
const htmlparser2Adapter = require("parse5-htmlparser2-tree-adapter");
const htmldocument_1 = require("./htmldocument");
const createHTMLDocument = (html, finalHref, originalDocument) => {
    const isFragment = !(/(<!doctype|<html\b)/i).test(html);
    const dom = parse5.parse(isFragment ? '' : html, {
        sourceCodeLocationInfo: !originalDocument,
        treeAdapter: htmlparser2Adapter
    });
    if (isFragment) {
        const body = dom.children[0].children[1];
        const fragment = parse5.parseFragment(html, {
            sourceCodeLocationInfo: !originalDocument,
            treeAdapter: htmlparser2Adapter
        });
        body.children = fragment.children;
        for (const child of body.children) {
            child.parent = body;
        }
    }
    return new htmldocument_1.HTMLDocument(dom, finalHref, originalDocument, isFragment);
};
exports.createHTMLDocument = createHTMLDocument;
