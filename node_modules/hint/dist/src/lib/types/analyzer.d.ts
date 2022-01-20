import { Problem } from '@hint/utils-types';
export type { UserConfig } from '@hint/utils';
export declare type CreateAnalyzerOptions = {
    formatters?: string[];
    hints?: string[];
    watch?: boolean;
};
export declare type Target = {
    url: string | URL;
    content?: string;
};
export declare type Endpoint = string | URL | Target;
export declare type AnalyzerResult = {
    url: string;
    problems: Problem[];
};
export declare type AnalyzerTargetStart = {
    url: string;
};
export declare type AnalyzerTargetEnd = AnalyzerTargetStart & {
    problems: Problem[];
};
export declare type AnalyzerTargetUpdate = AnalyzerTargetStart & {
    message: string;
    resource?: string;
};
export declare type AnalyzeOptions = {
    language?: string;
    targetEndCallback?: (targetEvent: AnalyzerTargetEnd) => Promise<void> | void;
    targetStartCallback?: (targetEvent: AnalyzerTargetStart) => Promise<void> | void;
    updateCallback?: (update: AnalyzerTargetUpdate) => Promise<void> | void;
};
//# sourceMappingURL=analyzer.d.ts.map