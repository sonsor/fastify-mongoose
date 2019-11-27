"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _winston = require("winston");

const {
  File,
  Console
} = _winston.transports;
const logger = (0, _winston.createLogger)({
  level: 'info',
  format: _winston.format.json(),
  transports: [new File({
    filename: 'error.log',
    level: 'error'
  }), new File({
    filename: 'combined.log'
  })]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new Console({
    format: _winston.format.simple()
  }));
}

logger.stream = {
  write: message => {
    logger.info(message.trim());
  }
};
var _default = logger;
exports.default = _default;
//# sourceMappingURL=logger.js.map