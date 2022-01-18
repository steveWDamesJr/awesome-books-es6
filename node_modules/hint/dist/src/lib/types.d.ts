import { IFormatterConstructor } from './types/formatters';
import { IConnectorConstructor } from './types/connector';
import { IParserConstructor } from './types/parser';
import { IHintConstructor } from './types/hints';
export * from './types/connector';
export * from './types/events';
export * from './types/formatters';
export * from './types/network';
export * from './types/hints';
export * from './types/parser';
export * from './types/analyzer';
export * from './types/analyzer-error';
export declare type Resource = IConnectorConstructor | IFormatterConstructor | IHintConstructor;
export declare type CLIOptions = {
    _: string[];
    'analytics-debug': boolean;
    config: string;
    debug: boolean;
    help: boolean;
    language: string;
    output: string;
    version: boolean;
    watch: boolean;
    formatters: string;
    hints: string;
};
export declare type HintResources = {
    connector: IConnectorConstructor | null;
    formatters: IFormatterConstructor[];
    incompatible: string[];
    missing: string[];
    parsers: IParserConstructor[];
    hints: IHintConstructor[];
};
export declare type StringKeyOf<T> = Extract<keyof T, string>;
//# sourceMappingURL=types.d.ts.map