import { HintContext, IHint } from 'hint';
import { WebpackConfigEvents } from '@hint/parser-webpack-config';
import { BabelConfigEvents } from '@hint/parser-babel-config';
export default class WebpackConfigModulesFalseBabel implements IHint {
    static readonly meta: import("hint").HintMetadata;
    constructor(context: HintContext<WebpackConfigEvents & BabelConfigEvents>);
}
//# sourceMappingURL=modules-false-babel.d.ts.map