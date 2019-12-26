"use strict";

var cov_qjn7hjjsi = function () {
  var path = "/home/wasif/projects/upstore/fastify-mongoose/src/helpers/index.js";
  var hash = "ef1a486bbc4540a72fa31186b5da240647700249";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/wasif/projects/upstore/fastify-mongoose/src/helpers/index.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 13
        },
        end: {
          line: 2,
          column: 15
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ef1a486bbc4540a72fa31186b5da240647700249"
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
Object.defineProperty(exports, "toArray", {
  enumerable: true,
  get: function () {
    return _toArray.default;
  }
});
exports.data = void 0;

var _toArray = _interopRequireDefault(require("./toArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const data = (cov_qjn7hjjsi.s[0]++, {});
exports.data = data;
//# sourceMappingURL=index.js.map