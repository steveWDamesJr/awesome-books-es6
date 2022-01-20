"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLAnchorElement = void 0;
const htmlelement_1 = require("../htmlelement");
class HTMLAnchorElement extends htmlelement_1.HTMLElement {
    constructor(element, ownerDocument) {
        super(element, ownerDocument);
        this._href = '';
        this._url = new URL('', ownerDocument.base);
    }
    _getURL() {
        const href = this.getAttribute('href') || '';
        if (this._href !== href) {
            try {
                this._href = href;
                this._url = new URL(this._href, this.ownerDocument.base);
            }
            catch (e) {
                this._url = new URL('', this.ownerDocument.base);
            }
        }
        return this._url;
    }
    get href() {
        return this._getURL().href;
    }
    get protocol() {
        return this._getURL().protocol;
    }
    get host() {
        return this._getURL().host;
    }
    get search() {
        return this._getURL().search;
    }
    get hash() {
        return this._getURL().hash;
    }
    get hostname() {
        return this._getURL().hostname;
    }
    get port() {
        return this._getURL().port;
    }
    get pathname() {
        return this._getURL().pathname;
    }
}
exports.HTMLAnchorElement = HTMLAnchorElement;
