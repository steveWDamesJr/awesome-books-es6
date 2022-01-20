import { HintContext, IHint } from 'hint';
import { WebpackConfigEvents } from '@hint/parser-webpack-config';
export default class WebpackConfigIsInstalled implements IHint {
    static readonly meta: import("hint").HintMetadata;
    constructor(context: HintContext<WebpackConfigEvents>);
}
//# sourceMappingURL=is-installed.d.ts.map