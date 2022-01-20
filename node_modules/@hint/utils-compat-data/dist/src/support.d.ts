import { UnsupportedBrowsers } from './browsers';
import { DeclarationQuery, RuleQuery, SelectorQuery } from './css';
import { AttributeQuery, ElementQuery } from './html';
export { AlternativeDetails, getFriendlyName, UnsupportedBrowsers } from './browsers';
export declare type FeatureQuery = AttributeQuery | DeclarationQuery | ElementQuery | RuleQuery | SelectorQuery;
export declare const getUnsupportedDetails: (feature: FeatureQuery, browsers: string[]) => UnsupportedBrowsers | null;
export declare const getUnsupported: (feature: FeatureQuery, browsers: string[]) => string[] | null;
export declare const getSupported: (feature: FeatureQuery, browsers: string[]) => string[] | null;
export declare const isSupported: (feature: FeatureQuery, browsers: string[]) => boolean;
//# sourceMappingURL=support.d.ts.map