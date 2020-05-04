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
            expect(ConnectionFactory.create() instanceof Connection).to.true;
        });

        it('should set the hosts property', () => {
            expect(ConnectionFactory.create().hosts instanceof Hosts).to.true;
        });

        it('should set the options property', () => {
            expect(ConnectionFactory.create().options instanceof Options).to.true;
        });

        it('should set the protocol', () => {
            expect(ConnectionFactory.create().protocol).to.be.equal('mongodb');
        });
    });

})//
