import { HintContext, IHint } from 'hint';
import { WebpackConfigEvents } from '@hint/parser-webpack-config';
export default class WebpackConfigIsValid implements IHint {
    static readonly meta: import("hint").HintMetadata;
    constructor(context: HintContext<WebpackConfigEvents>);
}
//# sourceMappingURL=is-valid.d.ts.map