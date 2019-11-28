"use strict";

var cov_974v2hrsb = function () {
  var path = "/home/wasif/projects/upstore/fastify-mongoose/src/option/OptionsFactory.js";
  var hash = "9eb8a459a2ca222b81494061d86a6d6c9b396bbc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/wasif/projects/upstore/fastify-mongoose/src/option/OptionsFactory.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 24
        },
        end: {
          line: 9,
          column: 37
        }
      },
      "1": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 14,
          column: 9
        }
      },
      "2": {
        start: {
          line: 13,
          column: 12
        },
        end: {
          line: 13,
          column: 36
        }
      },
      "3": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 6,
            column: 5
          }
        },
        loc: {
          start: {
            line: 6,
            column: 20
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "9eb8a459a2ca222b81494061d86a6d6c9b396bbc"
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

var _Options = _interopRequireDefault(require("./Options"));

var _defaults = _interopRequireDefault(require("./defaults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OptionsFactory {
  static create() {
    cov_974v2hrsb.f[0]++;
    // creating options instance
    const options = (cov_974v2hrsb.s[0]++, new _Options.default()); // setting up default options

    cov_974v2hrsb.s[1]++;

    for (const [key, value] of Object.entries(_defaults.default)) {
      cov_974v2hrsb.s[2]++;
      options.set(key, value);
    } // return the options instance


    cov_974v2hrsb.s[3]++;
    return options;
  }

}

var _default = OptionsFactory;
exports.default = _default;
//# sourceMappingURL=OptionsFactory.js.map