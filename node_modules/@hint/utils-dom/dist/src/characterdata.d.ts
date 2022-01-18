import { HTMLDocument } from './htmldocument';
import { Node } from './node';
import { CommentData, TextData } from './types';
declare type CData = CommentData | TextData;
export declare class CharacterData extends Node {
    private _cdata;
    constructor(data: CData, owner: HTMLDocument);
    get data(): string;
}
export {};
//# sourceMappingURL=characterdata.d.ts.map