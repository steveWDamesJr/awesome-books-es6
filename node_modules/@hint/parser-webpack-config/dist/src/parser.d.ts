import { Engine, Parser } from 'hint';
import { WebpackConfigEvents } from './types';
export * from './types';
export default class WebpackConfigParser extends Parser<WebpackConfigEvents> {
    private configFound;
    constructor(engine: Engine<WebpackConfigEvents>);
    private parseEnd;
    private getLocallyInstalledWebpack;
    private parseWebpack;
}
//# sourceMappingURL=parser.d.ts.map