import { Severity } from '@hint/utils-types';
export declare type HintSeverity = Severity | keyof typeof Severity;
export declare type HintConfig = HintSeverity | [HintSeverity, any];
export declare type HintsConfigObject = {
    [key: string]: HintConfig;
};
export declare type ConnectorOptionsConfig = {
    waitFor?: number;
    watch?: boolean;
};
export declare type ConnectorConfig = {
    name: string;
    options?: ConnectorOptionsConfig;
};
export declare type IgnoredUrl = {
    domain: string;
    hints: string[];
};
declare type HintConfigArray = [string, {
    [key: string]: any;
}];
declare type HintsConfigArray = (HintConfigArray | string)[];
export declare type UserConfig = {
    browserslist?: string | string[];
    connector?: ConnectorConfig | string;
    extends?: string[];
    formatters?: string[];
    hints?: HintsConfigObject | HintsConfigArray;
    hintsTimeout?: number;
    ignoredUrls?: IgnoredUrl[];
    language?: string;
    parsers?: string[];
    severityThreshold?: HintSeverity;
};
export {};
//# sourceMappingURL=types.d.ts.map