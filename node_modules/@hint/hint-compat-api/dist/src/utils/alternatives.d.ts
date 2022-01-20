import { AlternativeDetails, UnsupportedBrowsers } from '@hint/utils-compat-data';
export declare type BrowserAlternativeDetails = AlternativeDetails & {
    browser: string;
};
export declare const formatAlternatives: (language: string, unsupported: UnsupportedBrowsers, formatFeature?: ((name: string) => string) | undefined) => string[];
//# sourceMappingURL=alternatives.d.ts.map