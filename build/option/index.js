"use strict";

var cov_2iwaxu7xi3 = function () {
  var path = "/home/wasif/projects/upstore/fastify-mongoose/src/option/index.js";
  var hash = "25c96dd2f6c7d8c664722d4aa95a865d254622b2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/wasif/projects/upstore/fastify-mongoose/src/option/index.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "25c96dd2f6c7d8c664722d4aa95a865d254622b2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Options", {
  enumerable: true,
  get: function () {
    return _Options.default;
  }
});
Object.defineProperty(exports, "OptionsFactory", {
  enumerable: true,
  get: function () {
    return _OptionsFactory.default;
  }
});

var _Options = _interopRequireDefault(require("./Options"));

var _OptionsFactory = _interopRequireDefault(require("./OptionsFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map