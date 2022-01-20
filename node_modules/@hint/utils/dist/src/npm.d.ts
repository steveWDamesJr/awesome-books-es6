import { NpmPackage } from './types/npm';
export declare const installPackages: (packages: string[]) => Promise<boolean>;
export declare const search: (searchTerm: string) => Promise<NpmPackage[]>;
export declare const getOfficialPackages: (type: string) => Promise<NpmPackage[]>;
export declare const getUnofficialPackages: (type: string) => Promise<NpmPackage[]>;
//# sourceMappingURL=npm.d.ts.map