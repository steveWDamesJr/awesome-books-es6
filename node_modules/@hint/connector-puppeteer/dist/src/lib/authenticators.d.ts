import * as puppeteer from 'puppeteer-core';
import { ConnectorOptions } from '../connector';
export declare type HTTPAuthConfig = {
    user: string;
    password: string;
};
export declare type AuthConfig = {
    user: {
        selector: string;
        value: string;
    };
    next?: {
        selector: string;
    };
    password: {
        selector: string;
        value: string;
    };
    submit: {
        selector: string;
    };
};
export declare const basicHTTPAuth: (page: puppeteer.Page, config: ConnectorOptions) => Promise<void>;
export declare const formAuth: (page: puppeteer.Page, config: ConnectorOptions) => Promise<void>;
//# sourceMappingURL=authenticators.d.ts.map