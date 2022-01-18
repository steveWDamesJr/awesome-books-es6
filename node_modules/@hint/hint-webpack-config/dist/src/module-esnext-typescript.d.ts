import { HintContext, IHint } from 'hint';
import { WebpackConfigEvents } from '@hint/parser-webpack-config';
import { TypeScriptConfigEvents } from '@hint/parser-typescript-config';
export default class WebpackConfigModuleESNextTypescript implements IHint {
    static readonly meta: import("hint").HintMetadata;
    constructor(context: HintContext<WebpackConfigEvents & TypeScriptConfigEvents>);
}
//# sourceMappingURL=module-esnext-typescript.d.ts.map