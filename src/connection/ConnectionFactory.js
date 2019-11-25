import Connection from './Connection';
import { Hosts } from '../host';

class ConnectionFactory
{
    static create() {
        const hosts = new Hosts();
        const connection = new Connection();
        connection.hosts = hosts;
        connection.protocol = 'mongodb';
        return connection;
    }
}

export default ConnectionFactory;
