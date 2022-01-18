import { HintContext } from 'hint/dist/src/lib/hint-context';
import { IHint } from 'hint/dist/src/lib/types';
import { StyleEvents } from '@hint/parser-css';
export default class ScopedSvgStylesHint implements IHint {
    static readonly meta: import("hint/dist/src/lib/types").HintMetadata;
    constructor(context: HintContext<StyleEvents>);
}
//# sourceMappingURL=hint.d.ts.map