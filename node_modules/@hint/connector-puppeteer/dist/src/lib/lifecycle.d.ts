import * as puppeteer from 'puppeteer-core';
import { BrowserConnectOptions, BrowserLaunchArgumentOptions, LaunchOptions } from 'puppeteer-core';
export declare type LifecycleLaunchOptions = LaunchOptions & BrowserLaunchArgumentOptions & BrowserConnectOptions & {
    detached: boolean;
};
export declare const launch: (options: LifecycleLaunchOptions) => Promise<{
    browser: puppeteer.Browser;
    page: puppeteer.Page;
}>;
export declare const close: (browser: puppeteer.Browser, page: puppeteer.Page, options: LifecycleLaunchOptions) => Promise<void>;
//# sourceMappingURL=lifecycle.d.ts.map