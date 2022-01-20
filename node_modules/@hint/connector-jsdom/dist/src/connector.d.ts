/// <reference types="node" />
import { URL } from 'url';
import { HttpHeaders } from '@hint/utils-types';
import { HTMLDocument, HTMLElement } from '@hint/utils-dom';
import { Engine, IConnector, NetworkData } from 'hint';
import { Requester } from '@hint/utils-connector-tools';
export default class JSDOMConnector implements IConnector {
    private _options;
    private _href;
    private _targetNetworkData;
    private _window;
    private _document;
    private _originalDocument;
    private _timeout;
    private _resourceLoader?;
    private _subprocesses;
    static schema: {
        additionalProperties: boolean;
        properties: {
            ignoreHTTPSErrors: {
                type: string;
            };
            requestOptions: {
                type: string;
            };
            waitFor: {
                minimum: number;
                type: string;
            };
        };
    };
    request: Requester;
    server: Engine;
    finalHref: string;
    fetchedHrefs: Set<string>;
    constructor(server: Engine, config?: any);
    private _fetchUrl;
    private getFavicon;
    collect(target: URL): Promise<void>;
    close(): Promise<void>;
    fetchContent(target: URL | string, customHeaders?: object): Promise<NetworkData>;
    private killProcess;
    private killAllSubprocesses;
    evaluate(source: string): Promise<any>;
    querySelectorAll(selector: string): HTMLElement[];
    get dom(): HTMLDocument;
    get headers(): HttpHeaders;
    get html(): string;
}
//# sourceMappingURL=connector.d.ts.map