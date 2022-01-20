/// <reference types="node" />
import { HTMLElement } from '@hint/utils-dom';
import { HttpHeaders } from '@hint/utils-types';
import { fileExtension as getFileExtension } from '@hint/utils-fs';
declare const determineMediaTypeForScript: (element: HTMLElement) => string | null;
declare const determineMediaTypeBasedOnFileExtension: (resource: string, originalMediaType?: string | null) => string | null;
declare const determineMediaTypeBasedOnFileName: (resource: string, rawContent: Buffer) => string | null;
declare const getContentTypeData: (element: HTMLElement | null, resource: string, headers: HttpHeaders | null, rawContent: Buffer) => Promise<{
    charset: string | null;
    mediaType: string | null;
}>;
declare const isTextMediaType: (mediaType: string) => boolean;
declare const getType: (mediaType: string) => "json" | "xml" | "script" | "manifest" | "html" | "css" | "unknown" | "image" | "font" | "txt";
export { determineMediaTypeBasedOnFileExtension, determineMediaTypeBasedOnFileName, determineMediaTypeForScript, getContentTypeData, getFileExtension, getType, isTextMediaType };
//# sourceMappingURL=content-type.d.ts.map