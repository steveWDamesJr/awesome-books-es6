import { Problem } from '@hint/utils-types';
import { FormatterOptions } from 'hint';
declare type ThirdPartyLogo = {
    name: string;
    url: string;
    alt: string;
};
declare type ThirdPartyInfo = {
    logo: ThirdPartyLogo;
    link: string;
    details?: boolean;
};
export declare class HintResult {
    status: string;
    count: number;
    problems: Problem[];
    name: string;
    thirdPartyInfo: ThirdPartyInfo;
    hasDoc: boolean;
    constructor(name: string, status: string, url: string, isScanner: boolean);
    addProblem(problem: Problem): void;
}
export declare class CategoryResult {
    hintsCount: number;
    passed: HintResult[];
    hints: HintResult[];
    name: string;
    localizedName: string;
    image: string;
    status: string;
    private cache;
    url: string;
    private isScanner;
    constructor(name: string, url: string, isScanner: boolean, language?: string);
    getHintByName(name: string): HintResult | undefined;
    addHint(name: string, status: string): HintResult;
    addProblem(problem: Problem): void;
}
export default class AnalysisResult {
    hintsCount: number;
    scanTime: string;
    date: string;
    version?: string;
    permalink: string;
    categories: CategoryResult[];
    url: string;
    isFinish: boolean;
    status: string;
    id: string;
    isScanner: boolean;
    percentage: number;
    showError: boolean;
    private cache;
    constructor(target: string, options: FormatterOptions);
    private pad;
    private parseScanTime;
    getCategoryByName(name: string): CategoryResult | undefined;
    addProblem(problem: Problem, language?: string): void;
    addCategory(categoryName: string, language?: string): void;
    removeCategory(categoryName: string): void;
}
export {};
//# sourceMappingURL=result.d.ts.map