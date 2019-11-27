const fp = require('fastify-plugin');
const FastifyMongoose = require('./build/connect').default;

module.exports = fp(FastifyMongoose, {
    name: 'fastify-mongoose'
});
