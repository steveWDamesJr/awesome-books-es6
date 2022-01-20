export declare type MimeEntry = {
    charset?: string;
    extensions?: string[];
};
export declare type MimeDB = {
    [type: string]: MimeEntry;
};
declare const mimeDB: MimeDB;
export default mimeDB;
//# sourceMappingURL=index.d.ts.map