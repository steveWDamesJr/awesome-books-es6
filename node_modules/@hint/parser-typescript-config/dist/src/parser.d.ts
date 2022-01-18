import { Engine, Parser } from 'hint';
import { TypeScriptConfigEvents } from './types';
export * from './types';
export default class TypeScriptConfigParser extends Parser<TypeScriptConfigEvents> {
    private schema;
    private schemaPath;
    constructor(engine: Engine<TypeScriptConfigEvents>);
    private validateSchema;
    private parseTypeScript;
}
//# sourceMappingURL=parser.d.ts.map