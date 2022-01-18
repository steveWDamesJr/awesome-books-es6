import { Parser as WebhintParser } from 'hint/dist/src/lib/types';
import { Engine } from 'hint/dist/src/lib/engine';
import { ScriptEvents } from './types';
export * from './types';
export default class JavascriptParser extends WebhintParser<ScriptEvents> {
    constructor(engine: Engine<ScriptEvents>);
    private emitScript;
    private onFetchUnknown;
    private parseJavascript;
    private hasSrcAttribute;
    private isJavaScriptType;
    private parseJavascriptTag;
}
//# sourceMappingURL=parser.d.ts.map