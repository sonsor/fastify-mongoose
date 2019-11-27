"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Connection = _interopRequireDefault(require("./Connection"));

var _host = require("../host");

var _option = require("../option");

var _mongoose = _interopRequireWildcard(require("mongoose"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ConnectionFactory {
  static create() {
    // creating Hosts class instance to meet dependency injection
    const hosts = new _host.Hosts(); // create instance of Connection class

    const connection = new _Connection.default(); // setting the hosts property

    connection.hosts = hosts; // setting up the default protocol

    connection.protocol = 'mongodb'; // setting up options property

    connection.options = _option.OptionsFactory.create(); // setting the mongose object

    connection.mongoose = _mongoose.default; // return the connection instance

    return connection;
  }

}

var _default = ConnectionFactory;
exports.default = _default;
//# sourceMappingURL=ConnectionFactory.js.map