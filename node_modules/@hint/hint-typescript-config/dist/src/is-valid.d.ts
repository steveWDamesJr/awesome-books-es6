import { HintContext, IHint } from 'hint';
import { TypeScriptConfigEvents } from '@hint/parser-typescript-config';
export default class TypeScriptConfigIsValid implements IHint {
    static readonly meta: import("hint").HintMetadata;
    constructor(context: HintContext<TypeScriptConfigEvents>);
}
//# sourceMappingURL=is-valid.d.ts.map