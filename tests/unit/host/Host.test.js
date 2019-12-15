import Host from '../../../src/host/Host';
import { expect } from 'chai';
import { stub } from 'sinon';

describe('#Host', () => {

    let instance = null;

    beforeEach(() => {
        instance = new Host('localhost', 27017);
    });

    afterEach(() => {
        instance = null;
    })

    describe('#constructor', () => {

        it('should set host and port', () => {
            expect(instance.host).to.be.equal('localhost');
        });
    });

    describe('#set port', () => {
        it('should set the port', () => {
            instance.port = 22;
            expect(instance.port).to.be.equal(22);
        });
    });

    describe('#set host', () => {
        it('should set the host', () => {
            instance.host = 'anotherhost';
            expect(instance.host).to.be.equal('anotherhost');
        });
    });

    describe('#get port', () => {
        it('should return the setted port', () => {
            expect(instance.port).to.be.equal(27017);
        });
    });

    describe('#get host', () => {
        it('should set return the setted host', () => {
            expect(instance.host).to.be.equal('localhost');
        });
    });

    describe('#toString', () => {
        it('should return full host string', () => {
            expect(instance.toString()).to.be.a('string');
            expect(instance.toString()).to.be.equal('localhost:27017');
        });
    })
})
