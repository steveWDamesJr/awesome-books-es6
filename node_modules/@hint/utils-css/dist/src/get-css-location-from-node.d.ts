import { ChildNode } from 'postcss';
import { ProblemLocation } from '@hint/utils-types';
export declare type CSSLocationOptions = {
    isValue?: boolean;
};
export declare const getCSSLocationFromNode: (node: ChildNode, options?: CSSLocationOptions) => ProblemLocation | undefined;
//# sourceMappingURL=get-css-location-from-node.d.ts.map