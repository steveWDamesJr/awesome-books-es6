import { Token } from 'acorn';
import { Node } from 'estree-jsx';
import { HTMLElement } from '@hint/utils-dom';
import { Event, Events } from 'hint/dist/src/lib/types/events';
export type { CallExpression, JSXAttribute, JSXElement, JSXExpressionContainer, JSXText, Node } from 'estree-jsx';
declare type NodeTypes = Node['type'];
declare type NodeTypeForValue<N, T> = N extends {
    type: T;
} ? N : never;
export declare type NodeVisitor = {
    [T in NodeTypes]?: (node: NodeTypeForValue<Node, T>, ancestors?: Node[]) => void;
};
export declare type WalkCompleteListener = () => Promise<void> | void;
export declare type WalkMethods = {
    simple(node: Node, visitors: NodeVisitor, base?: NodeVisitor, state?: any): void;
    ancestor(node: Node, visitors: NodeVisitor, base?: NodeVisitor, state?: any): void;
    full(node: Node, callback: (node: Node, state: any, type: string) => void, base?: NodeVisitor, state?: any): void;
    fullAncestor(node: Node, callback: (node: Node, state: any, ancestors: Node[]) => void, base?: NodeVisitor, state?: any): void;
};
export declare type WalkEvents = {
    onComplete: (listener: WalkCompleteListener) => void;
};
export declare type Walk = WalkMethods & WalkEvents;
export declare type ScriptParse = Event & {
    ast: Node;
    element: HTMLElement | null;
    sourceCode: string;
    tokens: Token[];
    walk: Walk;
};
export declare type ScriptEvents = Events & {
    'parse::end::javascript': ScriptParse;
    'parse::start::javascript': Event;
};
//# sourceMappingURL=types.d.ts.map