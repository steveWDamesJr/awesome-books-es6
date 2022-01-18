import { Parser } from 'hint/dist/src/lib/types';
import { Engine } from 'hint/dist/src/lib/engine';
import { HTMLEvents } from '@hint/parser-html';
import { ScriptEvents } from '@hint/parser-javascript';
export default class JSXParser extends Parser<HTMLEvents> {
    constructor(engine: Engine<HTMLEvents & ScriptEvents>);
}
//# sourceMappingURL=parser.d.ts.map