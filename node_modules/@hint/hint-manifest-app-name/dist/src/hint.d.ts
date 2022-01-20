import { IHint } from 'hint/dist/src/lib/types';
import { ManifestEvents } from '@hint/parser-manifest';
import { HintContext } from 'hint/dist/src/lib/hint-context';
export default class ManifestAppNameHint implements IHint {
    static readonly meta: import("hint/dist/src/lib/types").HintMetadata;
    constructor(context: HintContext<ManifestEvents>);
}
//# sourceMappingURL=hint.d.ts.map