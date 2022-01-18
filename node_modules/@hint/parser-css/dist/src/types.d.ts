import { HTMLElement } from '@hint/utils-dom';
import { Event, Events } from 'hint/dist/src/lib/types/events';
import { Root } from 'postcss';
export declare type StyleParse = Event & {
    ast: Root;
    code: string;
    element: HTMLElement | null;
};
export declare type StyleEvents = Events & {
    'parse::end::css': StyleParse;
    'parse::start::css': Event;
};
//# sourceMappingURL=types.d.ts.map