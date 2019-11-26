import { ConnectionFactory } from './connection';
import { Host } from './host';
import { toArray } from './helpers';

const connect = (config) => {

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
    connection.name = name;

    // add all the hostss
    for (const { host, port} of toArray(hosts)) {
        connection.hosts.add(new Host(host, port));
    }

    // set all options
    for (const [key, value] of Object.entries(options)) {
        connection.options.set(key, value);
    }

    console.log(connection.options.toArray());

    // establish the connection


    // return the connection instance

}
connect({options: {}});
export default connect;
