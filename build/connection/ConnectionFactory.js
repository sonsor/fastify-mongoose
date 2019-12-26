"use strict";

var cov_x9paekbpa = function () {
  var path = "/home/wasif/projects/upstore/fastify-mongoose/src/connection/ConnectionFactory.js";
  var hash = "e8a3bee261d38cf89ced2cb69562e0ce5c1731f2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/wasif/projects/upstore/fastify-mongoose/src/connection/ConnectionFactory.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 22
        },
        end: {
          line: 10,
          column: 33
        }
      },
      "1": {
        start: {
          line: 13,
          column: 27
        },
        end: {
          line: 13,
          column: 43
        }
      },
      "2": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 33
        }
      },
      "3": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 40
        }
      },
      "4": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 53
        }
      },
      "5": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
          column: 39
        }
      },
      "6": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 8,
            column: 5
          }
        },
        loc: {
          start: {
            line: 8,
            column: 20
          },
          end: {
            line: 29,
            column: 5
          }
        },
        line: 8
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
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e8a3bee261d38cf89ced2cb69562e0ce5c1731f2"
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

var _Connection = _interopRequireDefault(require("./Connection"));

var _host = require("../host");

var _option = require("../option");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ConnectionFactory {
  static create() {
    cov_x9paekbpa.f[0]++;
    // creating Hosts class instance to meet dependency injection
    const hosts = (cov_x9paekbpa.s[0]++, new _host.Hosts()); // create instance of Connection class

    const connection = (cov_x9paekbpa.s[1]++, new _Connection.default()); // setting the hosts property

    cov_x9paekbpa.s[2]++;
    connection.hosts = hosts; // setting up the default protocol

    cov_x9paekbpa.s[3]++;
    connection.protocol = 'mongodb'; // setting up options property

    cov_x9paekbpa.s[4]++;
    connection.options = _option.OptionsFactory.create(); // setting the mongose object

    cov_x9paekbpa.s[5]++;
    connection.mongoose = _mongoose.default; // return the connection instance

    cov_x9paekbpa.s[6]++;
    return connection;
  }

}

var _default = ConnectionFactory;
exports.default = _default;
//# sourceMappingURL=ConnectionFactory.js.map