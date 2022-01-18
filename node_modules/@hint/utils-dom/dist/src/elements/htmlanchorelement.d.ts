import { ElementData } from '../types';
import { HTMLElement } from '../htmlelement';
import { HTMLDocument } from '../htmldocument';
export declare class HTMLAnchorElement extends HTMLElement {
    private _href;
    private _url;
    constructor(element: ElementData, ownerDocument: HTMLDocument);
    private _getURL;
    get href(): string;
    get protocol(): string;
    get host(): string;
    get search(): string;
    get hash(): string;
    get hostname(): string;
    get port(): string;
    get pathname(): string;
}
//# sourceMappingURL=htmlanchorelement.d.ts.map