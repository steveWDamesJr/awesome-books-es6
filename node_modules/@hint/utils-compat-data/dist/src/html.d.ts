import { UnsupportedBrowsers } from './browsers';
export declare type AttributeQuery = {
    attribute: string;
    element?: string;
    value?: string;
};
export declare type ElementQuery = {
    element: string;
};
export declare const getAttributeUnsupported: (feature: AttributeQuery, browsers: string[]) => UnsupportedBrowsers | null;
export declare const getElementUnsupported: (feature: ElementQuery, browsers: string[]) => UnsupportedBrowsers | null;
//# sourceMappingURL=html.d.ts.map