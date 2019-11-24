const fp = require('fastify-plugin')
const mongoose = require('mongoose');

class FastifyMongoose {
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
