"use strict";

var cov_mu2gi5fhu = function () {
  var path = "/home/wasif/projects/upstore/fastify-mongoose/src/host/index.js";
  var hash = "9d81503256f5170fa4b0f5a1000939105be8b58c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/wasif/projects/upstore/fastify-mongoose/src/host/index.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "9d81503256f5170fa4b0f5a1000939105be8b58c"
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
Object.defineProperty(exports, "Host", {
  enumerable: true,
  get: function () {
    return _Host.default;
  }
});
Object.defineProperty(exports, "Hosts", {
  enumerable: true,
  get: function () {
    return _Hosts.default;
  }
});

var _Host = _interopRequireDefault(require("./Host"));

var _Hosts = _interopRequireDefault(require("./Hosts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map