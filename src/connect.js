import { ConnectionFactory } from './connection';
import { Host } from './host';
import { toArray } from './helpers';

const connect = (fastify, config, next) => {

    // extract configs
    const {
        user,
        password,
        name,
        hosts,
        options
    } = config;

    // create the connection instance
    const connection = ConnectionFactory.create();

    // set the credentials of the connection
    connection.user = user;

    // set user for the connection
    connection.password = password;

    // set db name for the connection
    if (!name) {
        next(new Error('should provide database name.'));
        return false;
    }

    connection.name = name;

    // add all the hostss
    if (!hosts) {
        next(new Error('should provide at lease one host details.'));
        return false;
    }

    for (const { host, port} of toArray(hosts)) {
        connection.hosts.add(new Host(host, port));
    }

    // set all options
    for (const [key, value] of Object.entries(options)) {
        connection.options.set(key, value);
    }

    // establish the connection
    connection
        .connect()
        .then((conn) => {
            fastify.decorate('db', conn);
            next(null, conn);
        })
        .catch(err => next(err))
}

export default connect;
