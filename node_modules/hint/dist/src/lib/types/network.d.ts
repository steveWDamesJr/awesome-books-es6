/// <reference types="node" />
import { HttpHeaders } from '@hint/utils-types';
export declare type Request = {
    headers: HttpHeaders;
    url: string;
};
export declare type ResponseBody = {
    content: string;
    rawContent: Buffer;
    rawResponse(): Promise<Buffer>;
};
export declare type Response = {
    body: ResponseBody;
    charset: string;
    headers: HttpHeaders;
    hops: string[];
    mediaType: string;
    statusCode: number;
    url: string;
};
export declare type NetworkData = {
    response: Response;
    request: Request;
};
//# sourceMappingURL=network.d.ts.map