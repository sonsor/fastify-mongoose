const Connection = require('./Connection');
const Hosts = require('../Hosts');

class ConnectionFactory
{
    static create() {
        const hosts = new Hosts();
        const connection = new Connection();
        connection.hosts = hosts;
        connection.protocol = 'mongodb';
        return connection;co
    }
}

module.exports = ConnectionFactory;
