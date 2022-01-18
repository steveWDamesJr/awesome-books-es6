export declare type NpmMaintainer = {
    email: string;
    username: string;
};
export declare type NpmPackage = {
    date: Date;
    description: string;
    keywords: string[];
    maintainers: NpmMaintainer[];
    name: string;
    version: string;
};
export declare type NpmPackageResult = {
    package: NpmPackage;
};
export declare type NpmSearchResults = {
    objects: NpmPackageResult[];
    total: number;
};
//# sourceMappingURL=npm.d.ts.map