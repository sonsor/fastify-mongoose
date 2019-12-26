import { expect } from 'chai';
import { stub, spy } from 'sinon';
import connect from '../../src/connect';
import mongoose from 'mongoose';
import fastify from 'fastify';

describe('Fastify Mongoose Decorate', () => {

    let next;
    const config = {
        user: '',
        password: '',
        name: 'local',
        hosts: [{
            host: '127.0.0.1',
            port: 27017
        }],
        options: {}
    };

    before(() => {
        fastify.decorate = stub().onCall(0).callsFake((key, value) => {
            fastify[key] = value;
        })
    });

    it('should set the fastify decorator as db', (done) => {
        connect(fastify, config, (err, conn) => {
            expect(fastify).to.have.property('db');
            expect(fastify.db).to.be.eql(conn);
            conn.close();
            done();
        });
    });
});
