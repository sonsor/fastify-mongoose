"use strict";

var cov_15wk0hpzpe = function () {
  var path = "/home/wasif/projects/upstore/fastify-mongoose/src/config/logger.js";
  var hash = "a8a14262a64b4ffdb6052ec294976431f8aef933";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/wasif/projects/upstore/fastify-mongoose/src/config/logger.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 26
        },
        end: {
          line: 2,
          column: 36
        }
      },
      "1": {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 11,
          column: 2
        }
      },
      "2": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "3": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 16,
          column: 8
        }
      },
      "4": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 23,
          column: 2
        }
      },
      "5": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 11
          },
          end: {
            line: 20,
            column: 12
          }
        },
        loc: {
          start: {
            line: 20,
            column: 24
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 20
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 0
          },
          end: {
            line: 17,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 0
          },
          end: {
            line: 17,
            column: 1
          }
        }, {
          start: {
            line: 13,
            column: 0
          },
          end: {
            line: 17,
            column: 1
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "a8a14262a64b4ffdb6052ec294976431f8aef933"
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

var _winston = require("winston");

const {
  File,
  Console
} = (cov_15wk0hpzpe.s[0]++, _winston.transports);
const logger = (cov_15wk0hpzpe.s[1]++, (0, _winston.createLogger)({
  level: 'info',
  format: _winston.format.json(),
  transports: [new File({
    filename: 'error.log',
    level: 'error'
  }), new File({
    filename: 'combined.log'
  })]
}));
cov_15wk0hpzpe.s[2]++;

if (process.env.NODE_ENV !== 'production') {
  cov_15wk0hpzpe.b[0][0]++;
  cov_15wk0hpzpe.s[3]++;
  logger.add(new Console({
    format: _winston.format.simple()
  }));
} else {
  cov_15wk0hpzpe.b[0][1]++;
}

cov_15wk0hpzpe.s[4]++;
logger.stream = {
  write: message => {
    cov_15wk0hpzpe.f[0]++;
    cov_15wk0hpzpe.s[5]++;
    logger.info(message.trim());
  }
};
var _default = logger;
exports.default = _default;
//# sourceMappingURL=logger.js.map