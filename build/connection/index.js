"use strict";

var cov_1jinv99fq7 = function () {
  var path = "/home/wasif/projects/upstore/fastify-mongoose/src/connection/index.js";
  var hash = "4200c023a7b09795d89ef368042f8e4acafda724";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/wasif/projects/upstore/fastify-mongoose/src/connection/index.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "4200c023a7b09795d89ef368042f8e4acafda724"
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
Object.defineProperty(exports, "ConnectionFactory", {
  enumerable: true,
  get: function () {
    return _ConnectionFactory.default;
  }
});
Object.defineProperty(exports, "Connection", {
  enumerable: true,
  get: function () {
    return _Connection.default;
  }
});

var _ConnectionFactory = _interopRequireDefault(require("./ConnectionFactory"));

var _Connection = _interopRequireDefault(require("./Connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map