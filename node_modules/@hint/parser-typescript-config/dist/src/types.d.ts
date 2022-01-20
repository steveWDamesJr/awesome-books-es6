import { Event, ErrorEvent, Events } from 'hint';
import { JSONLocationFunction, ISchemaValidationError, GroupedError } from '@hint/utils-json';
import * as TypeScript from 'typescript';
export declare type TypeScriptConfig = {
    compilerOptions: TypeScript.CompilerOptions;
    compileOnSave: boolean;
    extends: string;
    files: string[];
    include: string[];
    exclude: string[];
    typeAcquisition: TypeScript.TypeAcquisition;
};
export declare type TypeScriptConfigInvalidJSON = ErrorEvent;
export declare type TypeScriptConfigInvalidSchema = ErrorEvent & {
    errors: ISchemaValidationError[];
    groupedErrors: GroupedError[];
    prettifiedErrors: string[];
};
export declare type TypeScriptConfigParseStart = Event;
export declare type TypeScriptConfigParse = Event & {
    config: TypeScriptConfig;
    getLocation: JSONLocationFunction;
    mergedConfig: TypeScriptConfig;
    originalConfig: TypeScriptConfig;
};
export declare type TypeScriptConfigExtendsError = ErrorEvent & {
    getLocation: JSONLocationFunction;
};
export declare type TypeScriptConfigEvents = Events & {
    'parse::end::typescript-config': TypeScriptConfigParse;
    'parse::error::typescript-config::extends': TypeScriptConfigExtendsError;
    'parse::error::typescript-config::json': TypeScriptConfigInvalidJSON;
    'parse::error::typescript-config::schema': TypeScriptConfigInvalidSchema;
    'parse::start::typescript-config': TypeScriptConfigParseStart;
};
//# sourceMappingURL=types.d.ts.map