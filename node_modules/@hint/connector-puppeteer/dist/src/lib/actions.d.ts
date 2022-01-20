import * as puppeteer from 'puppeteer-core';
import { ConnectorOptions } from '../connector';
export declare type ActionConfig = {
    file: string;
    on: 'beforeTargetNavigation' | 'afterTargetNavigation';
    options?: object;
};
declare type Action = (page: puppeteer.Page, config: ConnectorOptions) => Promise<void>;
export declare type UserActions = {
    afterTargetNavigation: Action[];
    beforeTargetNavigation: Action[];
};
export declare const group: (actions?: ActionConfig[]) => UserActions;
export {};
//# sourceMappingURL=actions.d.ts.map