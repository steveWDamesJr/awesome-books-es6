"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formAuth = exports.basicHTTPAuth = void 0;
const basicHTTPAuth = async (page, config) => {
    if (!config || !config.auth) {
        return;
    }
    if (typeof config.auth.user !== 'string' || typeof config.auth.password !== 'string') {
        return;
    }
    await page.authenticate({ password: config.auth.password, username: config.auth.user });
};
exports.basicHTTPAuth = basicHTTPAuth;
const formAuth = async (page, config) => {
    if (!config || !config.auth) {
        return;
    }
    if (typeof config.auth.user === 'string' || typeof config.auth.password === 'string') {
        return;
    }
    const auth = config.auth;
    const { user, password, submit, next } = auth;
    await page.type(user.selector, user.value);
    if (next) {
        await Promise.all([
            page.waitForNavigation({ waitUntil: config.waitUntil }),
            page.click(next.selector)
        ]);
    }
    await page.type(password.selector, password.value);
    await Promise.all([
        page.waitForNavigation({ waitUntil: config.waitUntil }),
        page.click(submit.selector)
    ]);
};
exports.formAuth = formAuth;
