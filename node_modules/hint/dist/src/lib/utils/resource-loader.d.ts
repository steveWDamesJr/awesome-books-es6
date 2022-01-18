import { ResourceType } from '@hint/utils';
import { IHintConstructor, HintResources } from '../types';
import { Configuration } from '../config';
export declare const getCoreResources: (type: string) => string[];
export declare const getInstalledResources: (type: ResourceType) => string[];
export declare const loadHint: (hintId: string, configurations?: string[] | undefined) => IHintConstructor;
export declare const loadConfiguration: (configurationId: string, configurations?: string[] | undefined) => any;
export declare const loadResources: (config: Configuration) => HintResources;
//# sourceMappingURL=resource-loader.d.ts.map