"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Connection = _interopRequireDefault(require("./Connection"));

var _host = require("../host");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ConnectionFactory {
  static create() {
    const hosts = new _host.Hosts();
    const connection = new _Connection.default();
    connection.hosts = hosts;
    connection.protocol = 'mongodb';
    return connection;
  }

}

var _default = ConnectionFactory;
exports.default = _default;