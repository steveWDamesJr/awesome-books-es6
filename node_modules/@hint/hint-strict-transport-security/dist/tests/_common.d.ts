export declare const OkayMaxAge = 31536000;
export declare const smallMaxAge = 1;
export declare const defaultMinimum = 10886400;
export declare const stsHeader = "strict-transport-security";
export declare const maxAgeOnlyHeader: {
    "strict-transport-security": string;
};
export declare const includeSubDomainsHeader: {
    "strict-transport-security": string;
};
export declare const preloadHeader: {
    "strict-transport-security": string;
};
export declare const mixCaseHeader: {
    "strict-transport-security": string;
};
export declare const quotedStringHeader: {
    "strict-transport-security": string;
};
export declare const tooShortHeader: {
    "strict-transport-security": string;
};
export declare const noMaxAgeHeader: {
    "strict-transport-security": string;
};
export declare const multipleMaxAgeHeader: {
    "strict-transport-security": string;
};
export declare const multipleincludeSubDomainsHeader: {
    "strict-transport-security": string;
};
export declare const wrongDelimiterHeader: {
    "strict-transport-security": string;
};
export declare const includeUnitMaxAgeHeader: {
    "strict-transport-security": string;
};
export declare const notPreloadableError = "www subdomain does not support HTTPS";
export declare const preloaded: {
    status: string;
};
export declare const unknown: {
    status: string;
};
export declare const noErrors: {
    errors: never[];
};
export declare const hasErrors: {
    errors: {
        message: string;
    }[];
};
export declare const generateTooShortError: (value: number) => string;
export declare const noHeaderError: string;
export declare const noMaxAgeError: string;
export declare const duplicateDirectivesError: string;
export declare const tooShortErrorDefault: string;
export declare const wrongFormatError: string;
export declare const statusServiceError = "Error getting preload status.";
export declare const preloadableServiceError = "Error getting preload eligibility.";
export declare const problemWithVerificationEndpoint = "Error getting preload status.";
export declare const faviconHeaderMaxAgeOnly: {
    '/': {
        content: string;
    };
    '/favicon.ico': {
        headers: {
            "strict-transport-security": string;
        };
    };
};
export declare const generateHTMLPageData: (content: string) => {
    content: string;
    headers: {
        "strict-transport-security": string;
    };
};
export declare const htmlPageWithScriptData: {
    content: string;
    headers: {
        "strict-transport-security": string;
    };
};
export declare const htmlPageWithManifestData: {
    content: string;
    headers: {
        "strict-transport-security": string;
    };
};
export declare const requestJSONAsyncMock: (responseObject: any) => {
    '@hint/utils-network': {
        isHTTPS: () => boolean;
        isRegularProtocol: () => boolean;
        requestJSONAsync: (uri: string) => Promise<any>;
    };
    '@hint/utils-string': {
        normalizeString: (str?: string) => string;
    };
};
//# sourceMappingURL=_common.d.ts.map