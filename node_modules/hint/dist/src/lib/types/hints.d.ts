import { HintContext } from '../hint-context';
import { HintMetadata } from './hint-meta';
export * from './hint-meta';
export interface IHint {
}
export interface IHintConstructor {
    new (context: HintContext): IHint;
    meta: HintMetadata;
}
//# sourceMappingURL=hints.d.ts.map