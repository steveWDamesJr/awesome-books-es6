import { HintContext } from 'hint/dist/src/lib/hint-context';
import { IHint } from 'hint/dist/src/lib/types';
export default class SRIHint implements IHint {
    static readonly meta: import("hint/dist/src/lib/types").HintMetadata;
    private context;
    private origin;
    private finalUrl;
    private baseline;
    private originCriteria;
    private cache;
    private reportedKeys;
    private calculateHash;
    private isScriptOrLink;
    private report;
    private isEligibleForIntegrityValidation;
    private hasIntegrityAttribute;
    private isIntegrityFormatValid;
    private isSecureContext;
    private hasRightHash;
    private getCache;
    private getCacheKey;
    private addToCache;
    private isNotLocalResource;
    private isInCache;
    private downloadContent;
    private isNotIgnored;
    private validateResource;
    private validateElement;
    private setOrigin;
    private onScanEnd;
    constructor(context: HintContext);
}
//# sourceMappingURL=hint.d.ts.map