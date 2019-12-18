import { expect } from 'chai';
import { stub } from 'sinon';
import Connection from '../../../src/connection/Connection';
import Hosts from '../../../src/host/Hosts';
import Options from '../../../src/option/Options';
import mongoose from 'mongoose';

describe('#Connection', () => {

    let instance = null;

    beforeEach(() => {
        instance = new Connection();
    });

    afterEach(() => {
        instance = null;
    });

    describe('#constructor', () => {

        it('should initalize variable with null', () => {
            expect(instance._user).to.be.equal(null);
            expect(instance._password).to.be.equal(null);
            expect(instance._name).to.be.equal(null);
            expect(instance._hosts).to.be.equal(null);
            expect(instance._options).to.be.equal(null);
            expect(instance._mongoose).to.be.equal(null);
        });
    });

    describe('#get protocol', () => {
        it('should return the protocol as string', () => {
            instance.protocol = 'mongodb://';
            expect(instance.protocol).to.be.a('string');
            expect(instance.protocol).to.be.equal('mongodb://');
        });
    });

    describe('#set protocol', () => {
        it('should set the protocol private variable', () => {
            instance.protocol = 'mongodb://';
            expect(instance._protocol).to.be.a('string');
            expect(instance._protocol).to.be.equal('mongodb://');
        });
    });

    describe('#get user', () => {
        it('should return the user private variable value', () => {
            instance._user = 'test';
            expect(instance.user).to.be.a('string');
            expect(instance.user).to.be.equal('test');
        });
    });

    describe('#set user', () => {
        it('should set the user private variable value', () => {
            instance.user = 'test';
            expect(instance._user).to.be.a('string');
            expect(instance._user).to.be.equal('test');
        });
    });

    describe('#get password', () => {
        it('should return the password private variable value', () => {
            instance._password = 'test';
            expect(instance.password).to.be.a('string');
            expect(instance.password).to.be.equal('test');
        });
    });

    describe('#set password', () => {
        it('should set the password private variable value', () => {
            instance.password = 'test';
            expect(instance._password).to.be.a('string');
            expect(instance._password).to.be.equal('test');
        });
    });

    describe('#get name', () => {
        it('should return the name private variable value', () => {
            instance._name = 'test';
            expect(instance.name).to.be.a('string');
            expect(instance.name).to.be.equal('test');
        });
    });

    describe('#set name', () => {
        it('should set the name private variable value', () => {
            instance.name = 'test';
            expect(instance._name).to.be.a('string');
            expect(instance._name).to.be.equal('test');
        });
    });

    describe('#get hosts', () => {

        let hosts = null;

        beforeEach(() => {
            hosts = new Hosts();
        });

        afterEach(() => {
            hosts = null;
        });

        it('should return the hosts private variable value', () => {
            instance._hosts = hosts;
            expect(instance.hosts).to.be.a('object');
            expect(instance.hosts).to.be.eql(hosts);
        });
    });

    describe('#set hosts', () => {

        let hosts = null;

        beforeEach(() => {
            hosts = new Hosts();
        });

        afterEach(() => {
            hosts = null;
        });

        it('should set the hosts private variable value', () => {
            instance.hosts = hosts;
            expect(instance._hosts).to.be.a('object');
            expect(instance._hosts).to.be.eql(hosts);
        });
    });

    describe('#get options', () => {

        let options = null;

        beforeEach(() => {
            options = new Options();
        });

        afterEach(() => {
            options = null;
        });

        it('should return the options private variable value', () => {
            instance._options = options;
            expect(instance.options).to.be.a('object');
            expect(instance.options).to.be.eql(options);
        });
    });

    describe('#set options', () => {

        let options = null;

        beforeEach(() => {
            options = new Options();
        });

        afterEach(() => {
            options = null;
        });

        it('should set the options private variable value', () => {
            instance.options = options;
            expect(instance._options).to.be.a('object');
            expect(instance._options).to.be.eql(options);
        });
    });

    describe('#get mongoose', () => {
        it('should return the mongoose private variable value', () => {
            instance._mongoose = mongoose;
            expect(instance.mongoose).to.be.a('object');
            expect(instance.mongoose).to.be.eql(mongoose);
        });
    });

    describe('#set mongoose', () => {
        it('should set the mongoose private variable value', () => {
            instance.mongoose = mongoose;
            expect(instance._mongoose).to.be.a('object');
            expect(instance._mongoose).to.be.eql(mongoose);
        });
    });

    describe('#toArray', () => {

        const hosts = new Hosts();
        const options = new Options();

        let hostsString;
        let optionsArray;

        beforeEach(() => {
            hostsString = stub(hosts, 'toString').returns('localhost:27017');
            optionsArray = stub(options, 'toArray').returns({key: 'value'});

            instance.name = 'test';
            instance.protocol = 'mongodb';
            instance.user = 'test';
            instance.password = 'test';
            instance.hosts = hosts;
            instance.options = options;
        });

        afterEach(() => {
            hosts.toString.restore();
            options.toArray.restore();
        });

        it('should return an array', () => {
            expect(instance.toArray()).to.be.a('array');
        });

        it('should return an array of length 2', () => {
            expect(instance.toArray().length).to.be.equal(2);
        });

        it('should return an array of first index as string', () => {
            expect(instance.toArray()[0]).to.be.a('string');
        });

        it('should return an array of second index as object', () => {
            expect(instance.toArray()[1]).to.be.a('object');
        });

        it('should return an array of first index as url', () => {
            expect(instance.toArray()[0]).to.be.equal('mongodb://test:test@localhost:27017/test');;
        });

        it('should return an array of first index as url without user and password', () => {
            instance.user = '';
            instance.password = '';
            expect(instance.toArray()[0]).to.be.equal('mongodb://localhost:27017/test');
        });

        it('should return array of seconad param as options', () => {
            expect(instance.toArray()[1]).to.be.eql({key: 'value'});
        });
    });

    describe('#connect', () => {

        beforeEach(() => {
            stub(instance, 'toArray').returns([
                'mongodb://localhost:27017',
                {}
            ]);
            instance.mongoose = mongoose;
            stub(mongoose, 'connect').resolves(true);
        });

        afterEach(() => {
            instance.toArray.restore();
            mongoose.connect.restore();
        });

        it('should return the mongo connection a non empty promise', () => {
            expect(instance.connect()).to.be.a('Promise');
        });
    })
});
