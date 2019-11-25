const ConnectionFactory = require('./connection');
const Options = require('./Options');
const Host = require('./Host');

const connect = (config) => {

    // extract configs
    const {
        user,
        password,
        name,
        hosts,
        options
    }

    // create the connection instance
    const connection = ConnectionFactory.create();

    // set the credentials of the connection
    connection.user = user;

    // set user for the connection
    connection.password = password;

    // set db name for the connection
    connection.name = name;

    // add all the hosts
    (!Array.isArray(hosts) ? [hosts]: hosts).forEach(({ host, port }) {
        connection.hosts.add(new Host(host, port));
    });

    // set all options

    // establish the connection

    // return the connection instance

}

module.exports = connect;
