import { FetchEnd, FetchError, FetchStart, Event, ErrorEvent, Events } from 'hint';
import { JSONLocationFunction, ISchemaValidationError, GroupedError } from '@hint/utils-json';
import { Manifest } from './schema';
export * from './schema';
export declare type ManifestInvalidJSON = ErrorEvent;
export declare type ManifestInvalidSchema = ErrorEvent & {
    errors: ISchemaValidationError[];
    groupedErrors: GroupedError[];
    prettifiedErrors: string[];
};
export declare type ManifestParsed = Event & {
    getLocation: JSONLocationFunction;
    parsedContent: Manifest;
};
export declare type ManifestEvents = Events & {
    'fetch::end::manifest': FetchEnd;
    'fetch::error::manifest': FetchError;
    'fetch::start::manifest': FetchStart;
    'parse::end::manifest': ManifestParsed;
    'parse::error::manifest::schema': ManifestInvalidSchema;
    'parse::error::manifest::json': ManifestInvalidJSON;
    'parse::start::manifest': Event;
};
//# sourceMappingURL=types.d.ts.map