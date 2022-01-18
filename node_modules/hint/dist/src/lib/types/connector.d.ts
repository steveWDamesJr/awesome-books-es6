/// <reference types="node" />
import * as url from 'url';
import { HttpHeaders } from '@hint/utils-types';
import { HTMLDocument, HTMLElement } from '@hint/utils-dom';
import { NetworkData } from './network';
import { Engine } from '../engine';
export interface IFetchOptions {
    content?: string;
}
export interface IConnector {
    dom?: HTMLDocument;
    html?: string;
    headers?: HttpHeaders;
    collect(target: url.URL, options?: IFetchOptions): Promise<any>;
    close(): Promise<void>;
    fetchContent(target: url.URL | string, customHeaders?: object, options?: IFetchOptions): Promise<NetworkData>;
    evaluate(code: string): Promise<any>;
    querySelectorAll(query: string): HTMLElement[];
}
export declare type BrowserInfo = {
    isNew?: boolean;
    pid: number;
    port?: number;
};
export interface ILauncher {
    launch(url: string, options?: any): Promise<BrowserInfo>;
    options?: any;
}
export interface IConnectorConstructor {
    new (server: Engine, config?: object, launcher?: ILauncher): IConnector;
    schema: any;
}
export declare type LauncherOptions = {
    defaultProfile?: boolean;
    flags?: string[];
    port?: number;
};
//# sourceMappingURL=connector.d.ts.map