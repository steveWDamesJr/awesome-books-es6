"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnsupportedBrowsers = exports.getFriendlyName = void 0;
const semver = require('semver/preload');
const browser_compat_data_1 = require("./browser-compat-data");
const browserToMDN = new Map([
    ['and_chr', 'chrome_android'],
    ['and_ff', 'firefox_android'],
    ['and_qq', 'qq_android'],
    ['and_uc', 'uc_android'],
    ['android', 'webview_android'],
    ['chrome', 'chrome'],
    ['edge', 'edge'],
    ['edge_mob', 'edge_mobile'],
    ['firefox', 'firefox'],
    ['ie', 'ie'],
    ['ios_saf', 'safari_ios'],
    ['node', 'nodejs'],
    ['opera', 'opera'],
    ['safari', 'safari'],
    ['samsung', 'samsunginternet_android']
]);
const coerce = (version) => {
    return semver.coerce(version) || version;
};
const normalizeBrowserName = (name) => {
    return browserToMDN.get(name) || name;
};
const isSupported = (support, prefix, rawVersion, unprefixed) => {
    const version = coerce(rawVersion);
    if (support.flags) {
        return { support: 2 };
    }
    if (prefix !== (support.prefix || '')) {
        return { support: 0 };
    }
    if (support.alternative_name && `${prefix}${unprefixed}` !== support.alternative_name) {
        return { support: 0 };
    }
    if (support.version_added === false) {
        return { support: 0 };
    }
    if (typeof support.version_removed === 'string' && semver.lte(coerce(support.version_removed), version)) {
        return { support: 0, versionRemoved: support.version_removed };
    }
    if (support.version_added === true || (support.version_added || '')[0] === '≤') {
        return { support: 1 };
    }
    if (typeof support.version_added === 'string') {
        if (semver.lte(coerce(support.version_added), version)) {
            return { support: 1 };
        }
        return { support: 0, versionAdded: support.version_added };
    }
    return { support: 2 };
};
const getAlternativeDetails = (simpleSupport, prefix, version, unprefixed) => {
    const simpleSupportPrefix = simpleSupport.prefix || '';
    if (!simpleSupport.alternative_name && prefix === simpleSupportPrefix) {
        return undefined;
    }
    const status = isSupported(simpleSupport, simpleSupportPrefix, version, simpleSupport.alternative_name || unprefixed);
    if (status.support !== 1) {
        return undefined;
    }
    const name = simpleSupport.alternative_name || `${simpleSupportPrefix}${unprefixed}`;
    const details = { name };
    if (typeof simpleSupport.version_added === 'string') {
        details.versionAdded = simpleSupport.version_added;
    }
    if (typeof simpleSupport.version_removed === 'string') {
        details.versionRemoved = simpleSupport.version_removed;
    }
    return details;
};
const isBrowserSupported = (statement, prefix, version, unprefixed) => {
    const browserSupport = Array.isArray(statement) ? statement : [statement];
    let alternative;
    let support = 2;
    let versionAdded;
    let versionRemoved;
    for (const simpleSupport of browserSupport) {
        const status = isSupported(simpleSupport, prefix, version, unprefixed);
        switch (status.support) {
            case 1:
                return { support: 1 };
            case 0:
                support = 0;
                versionAdded = status.versionAdded || versionAdded;
                versionRemoved = status.versionRemoved || versionRemoved;
                alternative = alternative || getAlternativeDetails(simpleSupport, prefix, version, unprefixed);
                break;
            case 2:
            default:
                break;
        }
    }
    if (support === 2) {
        support = 1;
    }
    return {
        alternative,
        support,
        versionAdded,
        versionRemoved
    };
};
const getFriendlyName = (browser) => {
    const [name] = browser.split(' ');
    const data = browser_compat_data_1.mdn.browsers[normalizeBrowserName(name)];
    return data.name;
};
exports.getFriendlyName = getFriendlyName;
const getUnsupportedBrowsers = (feature, prefix, browsers, unprefixed, parent) => {
    if (!feature || !feature.__compat || !feature.__compat.support) {
        return null;
    }
    const support = feature.__compat.support;
    const unsupported = [];
    const details = new Map();
    for (const browser of browsers) {
        const [name, versionStr] = browser.split(' ');
        const mdnBrowser = normalizeBrowserName(name);
        const browserSupport = support[mdnBrowser];
        const versions = versionStr.split('-');
        if (!browserSupport) {
            continue;
        }
        for (const version of versions) {
            const status = isBrowserSupported(browserSupport, prefix, version, unprefixed);
            if (status.support === 0) {
                const supportDetails = {};
                if (status.alternative) {
                    supportDetails.alternative = status.alternative;
                }
                if (status.versionAdded) {
                    supportDetails.versionAdded = status.versionAdded;
                }
                if (status.versionRemoved) {
                    supportDetails.versionRemoved = status.versionRemoved;
                }
                details.set(browser, supportDetails);
                unsupported.push(browser);
                break;
            }
        }
    }
    if (unsupported.length === 0) {
        return null;
    }
    let mdnUrl = feature.__compat.mdn_url;
    if (!mdnUrl && parent && parent.__compat) {
        mdnUrl = parent.__compat.mdn_url;
    }
    return unsupported.length ? { browsers: unsupported, details, mdnUrl } : null;
};
exports.getUnsupportedBrowsers = getUnsupportedBrowsers;
