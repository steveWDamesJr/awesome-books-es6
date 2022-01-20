import { Event, ErrorEvent, Events } from 'hint/dist/src/lib/types/events';
import { JSONLocationFunction, ISchemaValidationError, GroupedError } from '@hint/utils-json';
export declare type BabelConfig = {
    ast: boolean;
    auxiliaryCommentAfter: string;
    auxiliaryCommentBefore: string;
    code: boolean;
    comments: boolean;
    compact: string;
    env: object;
    extends: string;
    filename: string;
    filenameRelative: string;
    highlightCode: boolean;
    ignore: string[] | string;
    inputSourceMap: object;
    keepModuleIdExtensions: boolean;
    moduleId: string;
    moduleIds: string | boolean;
    moduleRoot: string;
    only: string[] | string;
    plugins: string | string[] | object[];
    presets: string | string[] | object[];
    retainLines: boolean;
    sourceFileName: string;
    sourceMaps: string | boolean;
    sourceMapTarget: string;
    sourceRoot: string;
};
export declare type BabelConfigInvalidJSON = ErrorEvent;
export declare type BabelConfigParseStart = Event;
export declare type BabelConfigParsed = Event & {
    config: BabelConfig;
    getLocation: JSONLocationFunction;
    originalConfig: BabelConfig;
};
export declare type BabelConfigInvalidSchema = ErrorEvent & {
    errors: ISchemaValidationError[];
    prettifiedErrors: string[];
    groupedErrors: GroupedError[];
};
export declare type BabelConfigExtendsError = ErrorEvent & {
    getLocation: JSONLocationFunction;
};
export declare type BabelConfigEvents = Events & {
    'parse::end::babel-config': BabelConfigParsed;
    'parse::error::babel-config::extends': BabelConfigExtendsError;
    'parse::error::babel-config::json': BabelConfigInvalidJSON;
    'parse::error::babel-config::schema': BabelConfigInvalidSchema;
    'parse::start::babel-config': BabelConfigParseStart;
};
//# sourceMappingURL=types.d.ts.map