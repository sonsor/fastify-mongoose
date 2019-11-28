"use strict";

var cov_1fryvkkp9q = function () {
  var path = "/home/wasif/projects/upstore/fastify-mongoose/src/helpers/toArray.js";
  var hash = "531c2758284b18ec369941e17c8dc53dbfdfa047";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/wasif/projects/upstore/fastify-mongoose/src/helpers/toArray.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 16
        },
        end: {
          line: 6,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 4
        },
        end: {
          line: 4,
          column: 5
        }
      },
      "2": {
        start: {
          line: 3,
          column: 8
        },
        end: {
          line: 3,
          column: 24
        }
      },
      "3": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 17
          }
        },
        loc: {
          start: {
            line: 1,
            column: 27
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 4
          },
          end: {
            line: 4,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 2,
            column: 4
          },
          end: {
            line: 4,
            column: 5
          }
        }, {
          start: {
            line: 2,
            column: 4
          },
          end: {
            line: 4,
            column: 5
          }
        }],
        line: 2
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "531c2758284b18ec369941e17c8dc53dbfdfa047"
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
exports.default = void 0;
cov_1fryvkkp9q.s[0]++;

const toArray = value => {
  cov_1fryvkkp9q.f[0]++;
  cov_1fryvkkp9q.s[1]++;

  if (!Array.isArray(value)) {
    cov_1fryvkkp9q.b[0][0]++;
    cov_1fryvkkp9q.s[2]++;
    value = [value];
  } else {
    cov_1fryvkkp9q.b[0][1]++;
  }

  cov_1fryvkkp9q.s[3]++;
  return value;
};

var _default = toArray;
exports.default = _default;
//# sourceMappingURL=toArray.js.map