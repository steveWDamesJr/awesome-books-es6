"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterData = void 0;
const node_1 = require("./node");
class CharacterData extends node_1.Node {
    constructor(data, owner) {
        super(data, owner);
        this._cdata = data;
    }
    get data() {
        return this._cdata.data;
    }
}
exports.CharacterData = CharacterData;
