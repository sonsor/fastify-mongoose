"use strict";

var cov_1vnw77ah4h = function () {
  var path = "/home/wasif/projects/upstore/fastify-mongoose/src/host/Host.js";
  var hash = "5a1fff179cb2db7a82fa2791dd2a0ef20928aa68";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/wasif/projects/upstore/fastify-mongoose/src/host/Host.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 26
        }
      },
      "1": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 26
        }
      },
      "2": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 27
        }
      },
      "3": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 29,
          column: 27
        }
      },
      "4": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 37,
          column: 26
        }
      },
      "5": {
        start: {
          line: 45,
          column: 8
        },
        end: {
          line: 45,
          column: 26
        }
      },
      "6": {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 54,
          column: 45
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        loc: {
          start: {
            line: 11,
            column: 28
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        loc: {
          start: {
            line: 20,
            column: 20
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 20
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        },
        loc: {
          start: {
            line: 28,
            column: 20
          },
          end: {
            line: 30,
            column: 5
          }
        },
        line: 28
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        },
        loc: {
          start: {
            line: 36,
            column: 15
          },
          end: {
            line: 38,
            column: 5
          }
        },
        line: 36
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 44,
            column: 5
          }
        },
        loc: {
          start: {
            line: 44,
            column: 15
          },
          end: {
            line: 46,
            column: 5
          }
        },
        line: 44
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 53,
            column: 5
          }
        },
        loc: {
          start: {
            line: 53,
            column: 15
          },
          end: {
            line: 55,
            column: 5
          }
        },
        line: 53
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "5a1fff179cb2db7a82fa2791dd2a0ef20928aa68"
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

/**
 *
 */
class Host {
  /**
   *
   * @param host
   * @param port
   */
  constructor(host, port) {
    cov_1vnw77ah4h.f[0]++;
    cov_1vnw77ah4h.s[0]++;
    this._host = host;
    cov_1vnw77ah4h.s[1]++;
    this._port = port;
  }
  /**
   *
   * @param value
   */


  set host(value) {
    cov_1vnw77ah4h.f[1]++;
    cov_1vnw77ah4h.s[2]++;
    this._host = value;
  }
  /**
   *
   * @param value
   */


  set port(value) {
    cov_1vnw77ah4h.f[2]++;
    cov_1vnw77ah4h.s[3]++;
    this._port = value;
  }
  /**
   *
   * @return {*}
   */


  get host() {
    cov_1vnw77ah4h.f[3]++;
    cov_1vnw77ah4h.s[4]++;
    return this._host;
  }
  /**
   *
   * @return {*}
   */


  get port() {
    cov_1vnw77ah4h.f[4]++;
    cov_1vnw77ah4h.s[5]++;
    return this._port;
  }
  /**
   *
   * @return {string}
   * @private
   */


  toString() {
    cov_1vnw77ah4h.f[5]++;
    cov_1vnw77ah4h.s[6]++;
    return this._host + ':' + this._port;
  }

}

var _default = Host;
exports.default = _default;
//# sourceMappingURL=Host.js.map