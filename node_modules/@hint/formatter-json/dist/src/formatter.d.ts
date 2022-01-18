import { FormatterOptions, IFormatter } from 'hint';
import { Problem } from '@hint/utils-types';
export default class JSONFormatter implements IFormatter {
    format(messages: Problem[], options?: FormatterOptions): Promise<void>;
}
//# sourceMappingURL=formatter.d.ts.map