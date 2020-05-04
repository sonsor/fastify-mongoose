import Connection from './Connection';
import { Hosts } from '../host';
import { OptionsFactory } from '../option';
import mongoose from 'mongoose';

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

        // setting the mongose object
        connection.mongoose = mongoose;

        // return the connection instance
        return connection;
    }
}

export default ConnectionFactory;
