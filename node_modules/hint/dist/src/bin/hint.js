#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli = require("../lib/cli");
process.once('uncaughtException', (err) => {
    console.error(err.message);
    console.error(err.stack);
    process.exit(1);
});
process.once('unhandledRejection', (r) => {
    const reason = r;
    const source = reason && reason instanceof Error ? reason : reason.error;
    console.error(`Unhandled rejection promise:
    uri: ${source.uri}
    message: ${source.message}
    stack:
${source.stack}`);
    process.exit(1);
});
const run = async () => {
    process.exitCode = await cli.execute(process.argv);
    process.exit(process.exitCode);
};
run();
