import { AnalyzerErrorStatus } from '../enums/error-status';
import { HintResources } from '../types';
export declare class AnalyzerError extends Error {
    status: AnalyzerErrorStatus;
    resources?: HintResources;
    invalidHints?: string[];
    constructor(error: Error | string, status: AnalyzerErrorStatus, items?: HintResources | string[]);
}
//# sourceMappingURL=analyzer-error.d.ts.map