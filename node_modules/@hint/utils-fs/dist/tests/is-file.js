"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const proxyquire = require("proxyquire");
const sinon = require("sinon");
const test = ava_1.default;
const loadScript = (context) => {
    return proxyquire('../src/is-file', { fs: context.fs });
};
test.beforeEach((t) => {
    t.context.sandbox = sinon.createSandbox();
    t.context.isFile = () => {
        return false;
    };
    t.context.fs = {
        statSync: () => {
            return { isFile: t.context.isFile };
        }
    };
});
test.afterEach.always((t) => {
    t.context.sandbox.restore();
});
test('if statSync throws an exception, isFile should return false', (t) => {
    t.context.sandbox.stub(t.context.fs, 'statSync').throws();
    const script = loadScript(t.context);
    const result = script.isFile('path');
    t.false(result);
});
test('if path is not a file, it should return false', (t) => {
    t.context.sandbox.stub(t.context, 'isFile').returns(false);
    const script = loadScript(t.context);
    const result = script.isFile('path');
    t.false(result);
});
test('if path is a file, it should return true', (t) => {
    t.context.sandbox.stub(t.context, 'isFile').returns(true);
    const script = loadScript(t.context);
    const result = script.isFile('path');
    t.true(result);
});
