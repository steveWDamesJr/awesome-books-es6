import { Event, Events } from 'hint/dist/src/lib/types';
import { HTMLDocument } from '@hint/utils-dom';
export declare type HTMLParse = Event & {
    html: string;
    document: HTMLDocument;
};
export declare type HTMLEvents = Events & {
    'parse::end::html': HTMLParse;
    'parse::start::html': Event;
};
//# sourceMappingURL=types.d.ts.map