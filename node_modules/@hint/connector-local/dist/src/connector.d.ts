/// <reference types="node" />
import { URL } from 'url';
import { HTMLDocument, HTMLElement } from '@hint/utils-dom';
import { Engine, IConnector, IFetchOptions, NetworkData } from 'hint';
import { HTMLEvents } from '@hint/parser-html';
export default class LocalConnector implements IConnector {
    private _evaluate;
    private _document;
    private _options;
    private engine;
    private _href;
    private filesPattern;
    private watcher;
    static schema: {
        additionalProperties: boolean;
        properties: {
            pattern: {
                items: {
                    type: string;
                };
                type: string;
            };
            watch: {
                type: string;
            };
        };
    };
    constructor(engine: Engine<HTMLEvents>, config: object);
    private getFilesPattern;
    private notifyFetch;
    private fetch;
    private fetchData;
    private getGitIgnore;
    private notify;
    private watch;
    private createJsdom;
    private onParseHTML;
    fetchContent(target: string, headers?: object, options?: IFetchOptions): Promise<NetworkData>;
    collect(target: URL, options?: IFetchOptions): Promise<void>;
    evaluate(source: string): Promise<any>;
    querySelectorAll(selector: string): HTMLElement[];
    close(): Promise<void>;
    get dom(): HTMLDocument | undefined;
    get html(): string;
}
//# sourceMappingURL=connector.d.ts.map