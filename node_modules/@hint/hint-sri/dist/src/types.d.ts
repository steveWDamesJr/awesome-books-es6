import { ReportOptions } from 'hint/dist/src/lib/hint-context';
export declare enum Algorithms {
    sha256 = 1,
    sha384 = 2,
    sha512 = 3
}
export declare enum OriginCriteria {
    all = 1,
    crossOrigin = 2
}
export declare type ErrorData = {
    options: ReportOptions;
    message: string;
    resource: string;
};
export declare type CacheComponents = {
    key: string;
    errors: ErrorData[];
};
export declare type URLs = {
    origin: string;
    final: string;
};
//# sourceMappingURL=types.d.ts.map