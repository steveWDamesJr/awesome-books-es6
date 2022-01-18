import { UnsupportedBrowsers } from './browsers';
export declare type DeclarationQuery = {
    property: string;
    value?: string;
};
export declare type RuleQuery = {
    rule: string;
};
export declare type SelectorQuery = {
    selector: string;
};
export declare type ParsedValue = {
    prefix: string;
    tokens: [string, string][];
    unprefixedValue: string;
};
export declare const getDeclarationUnsupported: (feature: DeclarationQuery, browsers: string[]) => UnsupportedBrowsers | null;
export declare const getRuleUnsupported: (feature: RuleQuery, browsers: string[]) => UnsupportedBrowsers | null;
export declare const getSelectorUnsupported: (feature: SelectorQuery, browsers: string[]) => UnsupportedBrowsers | null;
//# sourceMappingURL=css.d.ts.map