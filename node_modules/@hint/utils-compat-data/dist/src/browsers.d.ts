import { Identifier } from '@mdn/browser-compat-data/types';
export declare type AlternativeDetails = {
    name: string;
    versionAdded?: string;
    versionRemoved?: string;
};
export declare type SupportDetails = {
    alternative?: AlternativeDetails;
    versionAdded?: string;
    versionRemoved?: string;
};
export declare type UnsupportedBrowsers = {
    browsers: string[];
    details: Map<string, SupportDetails>;
    mdnUrl?: string;
};
export declare const getFriendlyName: (browser: string) => string;
export declare const getUnsupportedBrowsers: (feature: Identifier | undefined, prefix: string, browsers: string[], unprefixed: string, parent?: Identifier | undefined) => UnsupportedBrowsers | null;
//# sourceMappingURL=browsers.d.ts.map