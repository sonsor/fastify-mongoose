import Hosts from '../../../src/host/Hosts';
import { expect } from 'chai';
import { stub } from 'sinon';

describe('#Hosts', () => {

    let instance = null;
    const host = {
        toString: stub().returns('localhost:27017')
    };

    beforeEach(() => {
        instance = new Hosts();
    });

    afterEach(() => {
        instance = null;
    });

    describe('#constructor', () => {
        it('should set the hosts to empty', () => {
            expect(instance._hosts).to.be.a('array');
            expect(instance._hosts.length).to.be.equal(0);
        });
    });

    describe('#get hosts', () => {
        it('should return the setted hosts', () => {
            expect(instance.hosts).to.be.a('array');
        });
    });

    describe('#set hosts', () => {
        it('should set the hosts', () => {
            instance.hosts = [host];
            expect(instance.hosts).to.be.a('array');
            expect(instance.hosts.length).to.be.equal(1);
        });
    });

    describe('#add', () => {
        it('should add the host to hosts array', () => {
            instance.add(host);
            expect(instance.hosts).to.be.a('array');
            expect(instance.hosts.length).to.be.equal(1);
            expect(instance.hosts[0].toString()).to.be.equal('localhost:27017');
        });
    });

    describe('#toString', () => {
        it('should return all the host as string', () => {
            instance.add(host);
            instance.add(host);
            instance.add(host);
            expect(instance.toString()).to.be.equal('localhost:27017,localhost:27017,localhost:27017');
        });
    })
});
