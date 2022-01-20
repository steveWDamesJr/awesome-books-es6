import * as puppeteer from 'puppeteer-core';
import { HTMLDocument } from '@hint/utils-dom';
import { FetchEnd, NetworkData } from 'hint';
export declare type Fetcher = (target: string | URL, customHeaders?: object) => Promise<NetworkData>;
export declare const createFetchEndPayload: (response: puppeteer.HTTPResponse, fetchContent: Fetcher, dom?: HTMLDocument | undefined) => Promise<FetchEnd>;
//# sourceMappingURL=create-fetchend-payload.d.ts.map