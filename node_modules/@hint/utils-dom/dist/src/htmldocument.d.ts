import { HTMLElement } from './htmlelement';
import { Node } from './node';
import { DocumentData, NodeData } from './types';
export declare class HTMLDocument extends Node {
    private _document;
    private _documentElement;
    private _isFragment;
    private _nodes;
    private _pageHTML;
    private _base;
    defaultView?: any;
    originalDocument?: HTMLDocument;
    constructor(document: DocumentData, finalHref: string, originalDocument?: HTMLDocument, isFragment?: boolean);
    private findDocumentElement;
    private getBaseUrl;
    get documentElement(): HTMLElement;
    get base(): string;
    get body(): HTMLElement;
    get compatMode(): "BackCompat" | "CSS1Compat";
    get isFragment(): boolean;
    get title(): string;
    createElement(data: string): HTMLElement;
    getNodeFromData(data: NodeData): Node;
    elementsFromPoint(x: number, y: number): HTMLElement[];
    pageHTML(): string;
    querySelector(selector: string): HTMLElement | null;
    querySelectorAll(selector: string): HTMLElement[];
    resolveUrl(url: string): string;
}
//# sourceMappingURL=htmldocument.d.ts.map