export declare type Declaration = {
    prop: string;
    value: string;
};
export declare type DeclarationGroup = {
    type: 'and' | 'or' | 'not';
    nodes: (Declaration | DeclarationGroup)[];
};
export declare const parseSupports: (params: string) => DeclarationGroup | null;
//# sourceMappingURL=parse-supports.d.ts.map