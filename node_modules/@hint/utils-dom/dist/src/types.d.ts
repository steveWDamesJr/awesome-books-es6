import { ElementLocation, Location } from 'parse5';
export declare type HTMLAttribute = {
    name: string;
    value: string;
};
export interface INamedNodeMap {
    [index: number]: HTMLAttribute;
    item?(index: number): HTMLAttribute | null;
    readonly length: number;
}
export declare type ChildData = CommentData | DoctypeData | DocumentFragmentData | ElementData | TextData;
export declare type ParentData = DocumentData | DocumentFragmentData | ElementData;
declare type BaseData = {
    id?: number;
    next: ChildData | null;
    parent: ParentData | null;
    prev: ChildData | null;
};
export declare type CommentData = BaseData & {
    data: string;
    sourceCodeLocation?: Location | null;
    type: 'comment';
};
export declare type DoctypeData = BaseData & {
    data: string;
    name: '!doctype';
    nodeName?: string;
    publicId?: string;
    sourceCodeLocation?: Location | null;
    systemId?: string;
    type: 'directive';
    'x-name'?: string;
    'x-publicId'?: string;
    'x-systemId'?: string;
};
export declare type DocumentData = {
    children: ChildData[];
    name: 'root';
    type: 'root';
    'x-mode': 'no-quirks' | 'quirks' | 'limited-quirks';
};
export declare type NodeData = DocumentData | ChildData;
export declare type DocumentFragmentData = BaseData & {
    children: ChildData[];
    name: 'root';
    type: 'root';
};
export declare type Rects = {
    clientRect: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
};
export declare type ElementData = BaseData & {
    attribs: {
        [name: string]: string;
    };
    children: ChildData[];
    name: string;
    namespace?: string | null;
    sourceCodeLocation?: ElementLocation | null;
    type: 'script' | 'style' | 'tag';
    'x-attribsNamespace': {
        [name: string]: string;
    };
    'x-attribsPrefix': {
        [name: string]: string;
    };
    'x-styles'?: {
        [name: string]: string;
    };
    'x-rects'?: Rects;
};
export declare type TextData = BaseData & {
    data: string;
    sourceCodeLocation?: Location | null;
    type: 'text';
};
export {};
//# sourceMappingURL=types.d.ts.map