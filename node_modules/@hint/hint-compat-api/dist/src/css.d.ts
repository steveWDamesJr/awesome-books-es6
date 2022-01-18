import { HintContext } from 'hint/dist/src/lib/hint-context';
import { IHint } from 'hint/dist/src/lib/types';
import { StyleEvents } from '@hint/parser-css/dist/src/types';
export default class CSSCompatHint implements IHint {
    static readonly meta: import("hint/dist/src/lib/types").HintMetadata;
    constructor(context: HintContext<StyleEvents>);
}
//# sourceMappingURL=css.d.ts.map