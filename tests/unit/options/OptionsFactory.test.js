import { expect } from 'chai';
import { stub } from 'sinon';
import OptionsFactory from '../../../src/option/OptionsFactory';
import Options from '../../../src/option/Options';

describe('#OptionsFactory', () => {

    beforeEach(() => {
        stub(Options.prototype, 'get').returns('value1');
        stub(Options.prototype, 'set');
        stub(Options.prototype, 'toArray').returns({key1: 'value1'});
    });

    afterEach(() => {
        Options.prototype.get.resolves();
        Options.prototype.set.resolves();
        Options.prototype.toArray.resolves();
    });

    describe('#create', () => {
        it('should return the Options class object', () => {
            expect(OptionsFactory.create()).to.be.an('object');
        });
    });
});
