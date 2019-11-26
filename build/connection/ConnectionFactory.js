"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Connection = _interopRequireDefault(require("./Connection"));

var _host = require("../host");

var _option = require("../option");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ConnectionFactory {
  static create() {
    // creating Hosts class instance to meet dependency injection
    const hosts = new _host.Hosts(); // create instance of Connection class

    const connection = new _Connection.default(); // setting the hosts property

    connection.hosts = hosts; // setting up the default protocol

    connection.protocol = 'mongodb'; // setting up options property

    connection.options = _option.OptionsFactory.create(); // return the connection instance

    return connection;
  }

}

var _default = ConnectionFactory;
exports.default = _default;