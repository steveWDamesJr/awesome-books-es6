import * as puppeteer from 'puppeteer-core';
import { HTMLDocument } from '@hint/utils-dom';
import { Events } from 'hint';
import { Fetcher } from './create-fetchend-payload';
declare type EventResult<K extends keyof Events> = {
    name: K;
    payload: Events[K];
};
export declare const onRequestHandler: (request: puppeteer.HTTPRequest) => EventResult<'fetch::start::target' | 'fetch::start'>;
export declare const onRequestFailedHandler: (request: puppeteer.HTTPRequest, dom?: HTMLDocument | undefined) => EventResult<'fetch::error'> | null;
export declare const onResponseHandler: (response: puppeteer.HTTPResponse, fetchContent: Fetcher, dom?: HTMLDocument | undefined) => Promise<EventResult<'fetch::end::html' | 'fetch::end::*'> | null>;
export {};
//# sourceMappingURL=events.d.ts.map