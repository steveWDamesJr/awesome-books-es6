import { HintContext, IHint } from 'hint';
import { WebpackConfigEvents } from '@hint/parser-webpack-config';
export default class WebpackConfigNoDevtoolInProd implements IHint {
    static readonly meta: import("hint").HintMetadata;
    constructor(context: HintContext<WebpackConfigEvents>);
}
//# sourceMappingURL=no-devtool-in-prod.d.ts.map