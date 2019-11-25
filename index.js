//const fp = require('fastify-plugin')
//const mongoose = require('mongoose');

import fp from 'fastify-plugin';
import mongoose from 'mongoose';
import connect from './src';

console.log(connect());

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