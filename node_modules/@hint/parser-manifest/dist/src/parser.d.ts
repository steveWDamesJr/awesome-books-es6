import { Parser } from 'hint/dist/src/lib/types';
import { ManifestEvents } from './types';
import { Engine } from 'hint/dist/src/lib/engine';
export * from './types';
export default class ManifestParser extends Parser<ManifestEvents> {
    private readonly fetchEndEventName;
    private readonly fetchErrorEventName;
    private readonly fetchStartEventName;
    private readonly parseEndEventName;
    private readonly parseErrorSchemaEventName;
    private readonly parseJSONErrorEventName;
    private fetchedManifests;
    constructor(engine: Engine<ManifestEvents>);
    private onScanEnd;
    private fetchManifest;
    private validateManifest;
}
//# sourceMappingURL=parser.d.ts.map