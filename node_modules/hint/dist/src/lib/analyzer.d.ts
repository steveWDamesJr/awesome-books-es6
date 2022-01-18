import { AnalyzeOptions, CreateAnalyzerOptions, FormatterOptions, HintResources, Endpoint, AnalyzerResult } from './types';
import { UserConfig } from '@hint/utils';
import { Problem } from '@hint/utils-types';
export declare class Analyzer {
    private configuration;
    private engine?;
    private _resources;
    private formatters;
    private watch;
    private messages;
    private constructor();
    static create(userConfiguration: UserConfig, options?: CreateAnalyzerOptions): Analyzer;
    static getUserConfig(filePath?: string): UserConfig | null;
    private normalizeTarget;
    private normalizeEvent;
    private configureEngine;
    analyze(endpoints: Endpoint | Endpoint[], options?: AnalyzeOptions): Promise<AnalyzerResult[]>;
    format(problems: Problem[], options?: FormatterOptions): Promise<void>;
    close(): Promise<void>;
    get resources(): HintResources;
}
//# sourceMappingURL=analyzer.d.ts.map