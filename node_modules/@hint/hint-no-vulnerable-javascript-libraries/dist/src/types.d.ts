export declare type Library = {
    name: string;
    version: string;
    npmPkgName: string;
};
export declare type Vulnerability = {
    id: string;
    packageManager: string;
    severity: string;
    semver: {
        vulnerable: string[];
    };
    packageName: string;
};
//# sourceMappingURL=types.d.ts.map