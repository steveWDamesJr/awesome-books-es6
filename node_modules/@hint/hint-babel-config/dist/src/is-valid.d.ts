import { HintContext, IHint } from 'hint';
import { BabelConfigEvents } from '@hint/parser-babel-config';
export default class BabelConfigIsValidHint implements IHint {
    static readonly meta: import("hint").HintMetadata;
    constructor(context: HintContext<BabelConfigEvents>);
}
//# sourceMappingURL=is-valid.d.ts.map