'use strict';

var _connection = require('./connection');

var _host = require('./host');

var connect = function connect(config) {

    // extract configs
    var user = config.user,
        password = config.password,
        name = config.name,
        hosts = config.hosts,
        options = config.options;

    // create the connection instance

    var connection = _connection.ConnectionFactory.create();

    // set the credentials of the connection
    connection.user = user;

    // set user for the connection
    connection.password = password;

    // set db name for the connection
    connection.name = name;

    // add all the hosts
    (!Array.isArray(hosts) ? [hosts] : hosts).forEach(function (_ref) {
        var host = _ref.host,
            port = _ref.port;

        connection.hosts.add(new _host.Host(host, port));
    });

    // set all options

    // establish the connection

    // return the connection instance
};

module.exports = connect;