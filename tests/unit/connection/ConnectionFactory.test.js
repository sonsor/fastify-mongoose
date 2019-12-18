import { expect } from 'chai';
import { stub } from 'sinon';
import { ConnectionFactory, Connection } from '../../../src/connection';
import Hosts from '../../../src/host/Hosts';
import { OptionsFactory, Options } from '../../../src/option';

describe('#ConnectionFactory', () => {

    describe('#create', () => {

        beforeEach(() => {
            stub(OptionsFactory, 'create').returns(new Options());
        });

        afterEach(() => {
            OptionsFactory.create.restore();
        });

        it('should return the object', () => {
            expect(ConnectionFactory.create()).to.be.a('object');
        });

        it('should return the connection object', () => {
            expect(Connection.prototype.isPrototypeOf(ConnectionFactory.create())).to.true;
        });

        it('should set the hosts property', () => {
            expect(Hosts.prototype.isPrototypeOf(ConnectionFactory.create().hosts)).to.true;
        });

        it('should set the options property', () => {
            expect(Options.prototype.isPrototypeOf(ConnectionFactory.create().options)).to.true;
        });

        it('should set the protocol', () => {
            expect(ConnectionFactory.create().protocol).to.be.equal('mongodb');
        });
    });

})//
