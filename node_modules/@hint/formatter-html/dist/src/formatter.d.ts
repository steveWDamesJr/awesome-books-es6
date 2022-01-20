import { Problem } from '@hint/utils-types';
import { FormatterOptions, IFormatter } from 'hint';
import AnalysisResult from './result';
export default class HTMLFormatter implements IFormatter {
    private renderFile;
    format(problems: Problem[], options?: FormatterOptions): Promise<AnalysisResult>;
}
//# sourceMappingURL=formatter.d.ts.map