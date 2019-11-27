const connect = require('./build/connect').default;

console.log(connect);
connect({
    hosts: {
        host: 'test',
        port: 1
    },
    options: {}
});

/*class FastifyMongoose {
    constructor(config, next) {

    }
}

function FastifyMongoose() {
    this.connection = null;
    this.user = '';
    this.password = '';
    this.database = '';
    this.hosts = [];
    this.port = [];
    this.defaultOptions = {};
}

FastifyMongoose.prototype.toUrl = function() {

}

module.exports = fp(FastifyMongoose, {
    name: 'fastify-mongoose'
});
*/