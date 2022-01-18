/// <reference types="node" />
import { URL } from 'url';
import * as puppeteer from 'puppeteer-core';
import { HttpHeaders } from '@hint/utils-types';
import { HTMLElement, HTMLDocument } from '@hint/utils-dom';
import { IConnector, Engine, NetworkData } from 'hint';
import { Browser } from './lib/chromium-finder';
import { ActionConfig } from './lib/actions';
import { AuthConfig, HTTPAuthConfig } from './lib/authenticators';
export declare type ConnectorOptions = {
    actions?: ActionConfig[];
    auth?: AuthConfig | HTTPAuthConfig;
    browser?: Browser;
    detached?: boolean;
    headless?: boolean;
    ignoreHTTPSErrors?: boolean;
    puppeteerOptions?: puppeteer.ConnectOptions | puppeteer.LaunchOptions;
    waitUntil?: puppeteer.PuppeteerLifeCycleEvent;
};
export default class PuppeteerConnector implements IConnector {
    private _actions;
    private _browser;
    private _connectorOptions;
    private _dom;
    private _engine;
    private _finalHref;
    private _headers;
    private _ignoredMethods;
    private _listeners;
    private _originalDocument;
    private _page;
    private _options;
    private _pendingRequests;
    private _targetBody;
    private _targetReady;
    private _targetFailed;
    private _targetNetworkData;
    private _waitUntil;
    static schema: {
        additionalProperties: boolean;
        definitions: {
            action: {
                additionalProperties: boolean;
                properties: {
                    file: {
                        type: string;
                    };
                    on: {
                        enum: string[];
                        type: string;
                    };
                };
                required: string[];
            };
            auth: {
                oneOf: {
                    $ref: string;
                }[];
            };
            authOptions: {
                additionalProperties: boolean;
                properties: {
                    next: {
                        $ref: string;
                    };
                    password: {
                        $ref: string;
                    };
                    submit: {
                        $ref: string;
                    };
                    user: {
                        $ref: string;
                    };
                };
                required: string[];
                type: string;
            };
            fieldInput: {
                properties: {
                    selector: {
                        type: string;
                    };
                    value: {
                        type: string;
                    };
                };
                required: string[];
                type: string;
            };
            httpAuthOptions: {
                additionalProperties: boolean;
                properties: {
                    password: {
                        type: string;
                    };
                    user: {
                        type: string;
                    };
                };
                required: string[];
                type: string;
            };
            submitInput: {
                properties: {
                    selector: {
                        type: string;
                    };
                };
                required: string[];
                type: string;
            };
        };
        properties: {
            actions: {
                items: {
                    $ref: string;
                };
                type: string;
            };
            actionsConfig: {
                type: string;
            };
            auth: {
                $ref: string;
            };
            browser: {
                regexp: string;
                type: string;
            };
            detached: {
                type: string;
            };
            headless: {
                type: string;
            };
            ignoreHTTPSErrors: {
                type: string;
            };
            puppeteerOptions: {
                type: string;
            };
            waitUntil: {
                enum: string[];
                type: string;
            };
        };
    };
    constructor(engine: Engine, options?: ConnectorOptions);
    private isIgnoredMethod;
    private toPuppeteerOptions;
    private onError;
    private waitForTarget;
    private onRequest;
    private onRequestFailed;
    private onResponse;
    private addListeners;
    private removeListeners;
    private initiate;
    private processTarget;
    close(): Promise<void>;
    evaluate(code: string): Promise<any>;
    collect(target: URL): Promise<void>;
    fetchContent(target: URL | string, customHeaders?: object): Promise<NetworkData>;
    querySelectorAll(selector: string): HTMLElement[];
    get dom(): HTMLDocument | undefined;
    get html(): string;
    get headers(): HttpHeaders | undefined;
}
//# sourceMappingURL=connector.d.ts.map