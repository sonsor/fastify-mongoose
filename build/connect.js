"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = require("./connection");

var _host = require("./host");

var _helpers = require("./helpers");

const connect = (fastify, config, next) => {
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

  if (!name) {
    next(new Error('should provide database name.'));
    return;
  }

  connection.name = name; // add all the hostss

  if (!hosts) {
    next(new Error('should provide at lease one host details.'));
    return;
  }

  for (const {
    host,
    port
  } of (0, _helpers.toArray)(hosts)) {
    connection.hosts.add(new _host.Host(host, port));
  } // set all options


  for (const [key, value] of Object.entries(options)) {
    connection.options.set(key, value);
  }

  console.log(connection.options.toArray()); // establish the connection

  connection.connect().then(conn => {
    fastify.decorate('db', conn);
    next();
  }).catch(err => next(err));
};

var _default = connect;
exports.default = _default;
//# sourceMappingURL=connect.js.map