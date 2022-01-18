import { Engine, Parser } from 'hint';
import { BabelConfigEvents } from './types';
export * from './types';
export default class BabelConfigParser extends Parser<BabelConfigEvents> {
    private schema;
    constructor(engine: Engine<BabelConfigEvents>);
    private validateSchema;
    private parseBabelConfig;
}
//# sourceMappingURL=parser.d.ts.map