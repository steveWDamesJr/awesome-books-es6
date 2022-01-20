import { Parser } from 'hint/dist/src/lib/types';
import { Engine } from 'hint/dist/src/lib/engine';
import { HTMLEvents } from './types';
export * from './types';
export default class HTMLParser extends Parser<HTMLEvents> {
    constructor(engine: Engine<HTMLEvents>);
    private onFetchEnd;
}
//# sourceMappingURL=parser.d.ts.map