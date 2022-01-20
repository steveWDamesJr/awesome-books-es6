/// <reference types="node" />
import * as url from 'url';
import { EventEmitter2 as EventEmitter, Listener } from 'eventemitter2';
import { HttpHeaders, Problem } from '@hint/utils-types';
import { HTMLDocument, HTMLElement } from '@hint/utils-dom';
import { Events, HintResources, IFetchOptions, IFormatter, NetworkData, StringKeyOf } from './types';
import { Configuration } from './config';
export declare class Engine<E extends Events = Events> extends EventEmitter {
    private parsers;
    private hints;
    private connector;
    private messages;
    private browserslist;
    private ignoredUrls;
    private _formatters;
    private _timeout;
    private _lang;
    get pageDOM(): HTMLDocument | undefined;
    get pageContent(): string | undefined;
    get pageHeaders(): HttpHeaders | undefined;
    get targetedBrowsers(): string[];
    get formatters(): IFormatter[];
    get timeout(): number;
    private isIgnored;
    constructor(config: Configuration, resources: HintResources);
    onHintEvent<K extends StringKeyOf<E>>(id: string, eventName: K, listener: (data: E[K], event: string) => void): void;
    fetchContent(target: string | url.URL, headers?: object): Promise<NetworkData>;
    evaluate(source: string): Promise<any>;
    close(): Promise<void>;
    report(problem: Problem): void;
    clean(fileUrl: url.URL): void;
    clear(): void;
    notify(this: Engine<Events>, resource: string): Promise<void>;
    executeOn(target: url.URL, options?: IFetchOptions): Promise<Problem[]>;
    querySelectorAll(selector: string): HTMLElement[];
    emit<K extends StringKeyOf<E>>(event: K, data: E[K]): boolean;
    emitAsync<K extends StringKeyOf<E>>(event: K, data: E[K]): Promise<any[]>;
    on<K extends StringKeyOf<E>>(event: K, listener: (data: E[K]) => void): this | Listener;
    get language(): string;
}
//# sourceMappingURL=engine.d.ts.map