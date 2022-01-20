"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElementByUrl = void 0;
const url_1 = require("url");
const CACHED_URLS = new Map();
const getSrcsetUrls = (srcset) => {
    if (!srcset) {
        return [];
    }
    const parts = srcset.split(',');
    const urls = parts.reduce((total, part) => {
        const url = part.trim().split(' ')[0];
        if (!url) {
            return total;
        }
        total.push(url.trim());
        return total;
    }, []);
    return urls;
};
const getElementByUrl = (dom, url) => {
    const elements = dom.querySelectorAll('a[href],audio[src],frame[src],img[src],img[srcset],iframe[src],link[href],script[src],source[src],source[srcset],track[src],video[poster]');
    if (!CACHED_URLS.has(dom.base)) {
        CACHED_URLS.set(dom.base, new Map());
    }
    const urlCache = CACHED_URLS.get(dom.base);
    for (let i = 0; i < elements.length; ++i) {
        const element = elements[i];
        const elementUrl = element.getAttribute('href') || element.getAttribute('src') || element.getAttribute('poster');
        const elementUrls = [elementUrl, ...getSrcsetUrls(element.getAttribute('srcset'))];
        if (elementUrls.includes(url)) {
            return element;
        }
        for (let k = 0; k < elementUrls.length; ++k) {
            const relativeUrl = elementUrls[k];
            if (relativeUrl === null) {
                continue;
            }
            try {
                if (!urlCache.has(relativeUrl)) {
                    urlCache.set(relativeUrl, new url_1.URL(relativeUrl, dom.base));
                }
                const { href } = urlCache.get(relativeUrl);
                if (href === url) {
                    return element;
                }
            }
            catch (e) {
            }
        }
    }
    return null;
};
exports.getElementByUrl = getElementByUrl;
