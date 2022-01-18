import { Problem } from '@hint/utils-types';
import { UserConfig } from '@hint/utils';
import { HintResources } from '../types';
export declare type FormatterOptions = {
    config?: UserConfig;
    date?: string;
    isScanner?: boolean;
    language?: string;
    noGenerateFiles?: boolean;
    output?: string;
    resources?: HintResources;
    scanTime?: number;
    status?: string;
    target?: string;
    version?: string;
};
export interface IFormatter {
    format(problems: Problem[], options?: FormatterOptions): void;
}
export interface IFormatterConstructor {
    new (): IFormatter;
}
//# sourceMappingURL=formatters.d.ts.map