import { Engine } from '../engine';
import { Events } from './events';
export declare abstract class Parser<E extends Events = Events> {
    protected engine: Engine<E>;
    protected name: string;
    constructor(engine: Engine<E>, parseEventType: string);
}
export interface IParserConstructor {
    new (engine: Engine): Parser;
}
//# sourceMappingURL=parser.d.ts.map