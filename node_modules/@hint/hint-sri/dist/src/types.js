"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginCriteria = exports.Algorithms = void 0;
var Algorithms;
(function (Algorithms) {
    Algorithms[Algorithms["sha256"] = 1] = "sha256";
    Algorithms[Algorithms["sha384"] = 2] = "sha384";
    Algorithms[Algorithms["sha512"] = 3] = "sha512";
})(Algorithms = exports.Algorithms || (exports.Algorithms = {}));
var OriginCriteria;
(function (OriginCriteria) {
    OriginCriteria[OriginCriteria["all"] = 1] = "all";
    OriginCriteria[OriginCriteria["crossOrigin"] = 2] = "crossOrigin";
})(OriginCriteria = exports.OriginCriteria || (exports.OriginCriteria = {}));
