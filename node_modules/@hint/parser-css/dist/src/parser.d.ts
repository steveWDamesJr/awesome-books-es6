import { Parser } from 'hint/dist/src/lib/types';
import { StyleEvents } from './types';
import { Engine } from 'hint';
export * from './types';
export default class CSSParser extends Parser<StyleEvents> {
    constructor(engine: Engine<StyleEvents>);
    private emitCSS;
    private parseCSS;
    private isCSSType;
    private parseStyleTag;
}
//# sourceMappingURL=parser.d.ts.map