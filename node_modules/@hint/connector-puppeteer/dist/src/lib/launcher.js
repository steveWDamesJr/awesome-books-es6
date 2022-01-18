"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer = require("puppeteer-core");
process.on('message', async (options) => {
    const browser = await puppeteer.launch(options);
    browser.on('disconnected', () => {
        process.exit();
    });
    process.send({ browserWSEndpoint: browser.wsEndpoint() });
});
