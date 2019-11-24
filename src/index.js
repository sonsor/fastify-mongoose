const Connection = require('./Connection');
const Options = require('./Options');
const Host = require('./Host');

const connect = (config) => {
    const connection = new Connection();
    connection.setUser()
}

module.exports = connect;
