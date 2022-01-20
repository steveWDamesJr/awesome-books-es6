export declare enum Grades {
    'A+' = 1,
    A = 2,
    'A-' = 3,
    B = 4,
    C = 5,
    D = 6,
    E = 7,
    F = 8,
    M = 9,
    T = 10
}
export declare type SSLLabsEndpoint = {
    grade: keyof typeof Grades;
    serverName: string;
    details: {
        protocols: string[];
    };
};
export declare type SSLLabsEndpointDetail = {
    protocols: any[];
};
export declare type SSLLabsOptions = {
    all: string;
    fromCache: boolean;
    host: string;
    maxAge: number;
};
export declare type SSLLabsResult = {
    endpoints: SSLLabsEndpoint[];
    status: 'READY' | 'ERROR' | 'IN_PROGRESS' | 'DNS';
};
//# sourceMappingURL=types.d.ts.map