import { TypeScriptConfigParse, TypeScriptConfig } from '@hint/parser-typescript-config';
import { HintContext } from 'hint';
import { JSONLocationFunction } from '@hint/utils-json';
import { Severity } from '@hint/utils-types';
import { MessageName } from '../i18n.import';
declare const findValue: (property: string, config: TypeScriptConfig) => any;
declare const findLocation: (propertyPath: string, mergedConfig: TypeScriptConfig, originalConfig: TypeScriptConfig, getLocation: JSONLocationFunction) => import("@hint/utils-types").ProblemLocation | null;
declare const configChecker: (property: string, desiredValue: boolean, messageName: MessageName, context: HintContext, severity: Severity) => (evt: TypeScriptConfigParse) => void;
export { configChecker, findLocation, findValue };
//# sourceMappingURL=config-checker.d.ts.map