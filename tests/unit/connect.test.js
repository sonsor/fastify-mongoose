import { expect } from 'chai';
import { stub } from 'sinon';
import connect from '../../src/connect';
import {ConnectionFactory} from "../../src/connection";
import Options from "../../src/option/Options";
import Hosts from "../../src/host/Hosts";


describe('#connect', () => {

    let hosts;
    let options;
    const fastify = {};
    let next;
    let resolve;
    let reject;

    beforeEach(() => {
        hosts = new Hosts();
        options = new Options();

        stub(hosts, 'add');
        stub(options, 'set');
        stub(options, 'get');

        fastify.decorate = stub();
        next = stub();

        stub(ConnectionFactory, 'create').returns({
            hosts,
            options,
            connect: () => new Promise((res, rej) => {
                resolve = res;
                reject = rej
            })
        });
    });

    afterEach(() => {
        ConnectionFactory.create.restore();
        hosts.add.restore();
        options.set.restore();
        options.get.restore();
    });

    it('should throw error if name is empty', () => {
        next.onCall(0).callsFake(err => err);
        expect(connect(fastify, {}, next)).to.false;
        expect(next.called).to.true;
    });

    it('should throw error if hosts is empty', () => {
        next.onCall(0).callsFake(err => err);
        expect(connect(fastify, { name: 'test'}, next)).to.false;
        expect(next.called).to.true;
    });

    it('should call the hosts add options set and connection connect and fastify decode function', () => {
        const config = {
            name: 'test',
            hosts: [{
                host: 'localhost',
                port: 27017
            }],
            options: {
                key: 'value'
            }
        }

        next.returns(true);

        connect(fastify, config, next);
        resolve(true);
        expect(options.set.called).to.true;
        expect(hosts.add.called).to.true;
    });

    it('should throw error on connection connect function', () => {
        const config = {
            name: 'test',
            hosts: [{
                host: 'localhost',
                port: 27017
            }],
            options: {
                key: 'value'
            }
        }

        next.returns(true);
        connect(fastify, config, next);
        reject(new Error('unable to connect'));
        expect(options.set.called).to.true;
        expect(hosts.add.called).to.true;
    });
});
