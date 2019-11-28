"use strict";

var cov_3nntw2sie = function () {
  var path = "/home/wasif/projects/upstore/fastify-mongoose/src/host/Hosts.js";
  var hash = "c8a9b1f08175e7fc755c2b91504d43ee0e1ef61a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/wasif/projects/upstore/fastify-mongoose/src/host/Hosts.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 25
        }
      },
      "1": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 18,
          column: 27
        }
      },
      "2": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 28
        }
      },
      "3": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 34,
          column: 31
        }
      },
      "4": {
        start: {
          line: 43,
          column: 20
        },
        end: {
          line: 43,
          column: 22
        }
      },
      "5": {
        start: {
          line: 44,
          column: 8
        },
        end: {
          line: 46,
          column: 10
        }
      },
      "6": {
        start: {
          line: 45,
          column: 12
        },
        end: {
          line: 45,
          column: 40
        }
      },
      "7": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 47,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        },
        loc: {
          start: {
            line: 9,
            column: 18
          },
          end: {
            line: 11,
            column: 5
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        loc: {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 19,
            column: 5
          }
        },
        line: 17
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        },
        loc: {
          start: {
            line: 25,
            column: 21
          },
          end: {
            line: 27,
            column: 5
          }
        },
        line: 25
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        },
        loc: {
          start: {
            line: 33,
            column: 14
          },
          end: {
            line: 35,
            column: 5
          }
        },
        line: 33
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 42,
            column: 5
          }
        },
        loc: {
          start: {
            line: 42,
            column: 15
          },
          end: {
            line: 48,
            column: 5
          }
        },
        line: 42
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 44,
            column: 28
          },
          end: {
            line: 44,
            column: 29
          }
        },
        loc: {
          start: {
            line: 44,
            column: 38
          },
          end: {
            line: 46,
            column: 9
          }
        },
        line: 44
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
      "6": 0,
      "7": 0
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
    hash: "c8a9b1f08175e7fc755c2b91504d43ee0e1ef61a"
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
class Hosts {
  /**
   *
   */
  constructor() {
    cov_3nntw2sie.f[0]++;
    cov_3nntw2sie.s[0]++;
    this._hosts = [];
  }
  /**
   *
   * @return {Array}
   */


  get hosts() {
    cov_3nntw2sie.f[1]++;
    cov_3nntw2sie.s[1]++;
    return this._hosts;
  }
  /**
   *
   * @param value
   */


  set hosts(value) {
    cov_3nntw2sie.f[2]++;
    cov_3nntw2sie.s[2]++;
    this._hosts = value;
  }
  /**
   *
   * @param host
   */


  add(host) {
    cov_3nntw2sie.f[3]++;
    cov_3nntw2sie.s[3]++;

    this._hosts.push(host);
  }
  /**
   *
   * @return {string}
   * @private
   */


  toString() {
    cov_3nntw2sie.f[4]++;
    let hosts = (cov_3nntw2sie.s[4]++, []);
    cov_3nntw2sie.s[5]++;

    this._hosts.forEach(host => {
      cov_3nntw2sie.f[5]++;
      cov_3nntw2sie.s[6]++;
      hosts.push(host.toString());
    });

    cov_3nntw2sie.s[7]++;
    return hosts.join(',');
  }

}

var _default = Hosts;
exports.default = _default;
//# sourceMappingURL=Hosts.js.map