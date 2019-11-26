"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = require("./connection");

var _host = require("./host");

const connect = config => {
  // extract configs
  const {
    user,
    password,
    name,
    hosts,
    options
  } = config; // create the connection instance

  const connection = _connection.ConnectionFactory.create(); // set the credentials of the connection


  connection.user = user; // set user for the connection

  connection.password = password; // set db name for the connection

  connection.name = name; // add all the hosts

  (!Array.isArray(hosts) ? [hosts] : hosts).forEach(({
    host,
    port
  }) => {
    connection.hosts.add(new _host.Host(host, port));
  }); // set all options

  for (const [key, value] of options) {
    connection.options[key] = value;
  } // establish the connection
  // return the connection instance

};

var _default = connect;
exports.default = _default;