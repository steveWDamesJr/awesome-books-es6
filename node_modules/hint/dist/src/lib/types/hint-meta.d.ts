import { Category } from '@hint/utils-types';
import { HintScope } from '../enums/hint-scope';
export declare type MetadataDocs = {
    category?: Category;
    description: string;
    name?: string;
};
export declare type HintMetadata = {
    docs?: MetadataDocs;
    getDescription: (language: string) => string;
    getName: (language: string) => string;
    id: string;
    ignoredConnectors?: string[];
    ignoredUrls?: RegExp[];
    schema: any[];
    scope: HintScope;
};
//# sourceMappingURL=hint-meta.d.ts.map