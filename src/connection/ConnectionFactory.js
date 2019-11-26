import Connection from './Connection';
import { Hosts } from '../host';
import { OptionsFactory } from '../option';

class ConnectionFactory
{
    static create() {
        // creating Hosts class instance to meet dependency injection
        const hosts = new Hosts();

        // create instance of Connection class
        const connection = new Connection();

        // setting the hosts property
        connection.hosts = hosts;

        // setting up the default protocol
        connection.protocol = 'mongodb';

        // setting up options property
        connection.options = OptionsFactory.create();

        // return the connection instance
        return connection;
    }
}

export default ConnectionFactory;
