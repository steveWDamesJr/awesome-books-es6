import { ResourceErrorStatus } from './enums';
export declare class ResourceError extends Error {
    status: ResourceErrorStatus;
    constructor(error: Error | string, status: ResourceErrorStatus);
}
//# sourceMappingURL=resource-error.d.ts.map