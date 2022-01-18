"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedirectManager = void 0;
class RedirectManager {
    constructor() {
        this._redirects = new Map();
    }
    add(destination, source) {
        this._redirects.set(destination, source);
    }
    calculate(target) {
        let targetUrl = target;
        const hops = [targetUrl];
        while (this._redirects.has(targetUrl)) {
            targetUrl = this._redirects.get(targetUrl);
            const finish = hops.includes(targetUrl);
            hops.unshift(targetUrl);
            if (finish) {
                break;
            }
        }
        hops.pop();
        return hops;
    }
}
exports.RedirectManager = RedirectManager;
