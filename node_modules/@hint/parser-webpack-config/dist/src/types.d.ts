import * as webpack from 'webpack';
import { ErrorEvent, Event, Events } from 'hint';
export declare type WebpackConfigInvalidConfiguration = ErrorEvent;
export declare type WebpackConfigParse = Event & {
    config: webpack.Configuration;
    version: string;
};
export declare type WebpackConfigEvents = Events & {
    'parse::end::webpack-config': WebpackConfigParse;
    'parse::error::webpack-config::configuration': WebpackConfigInvalidConfiguration;
    'parse::error::webpack-config::not-found': ErrorEvent;
    'parse::error::webpack-config::not-install': ErrorEvent;
    'parse::start::webpack-config': Event;
};
//# sourceMappingURL=types.d.ts.map