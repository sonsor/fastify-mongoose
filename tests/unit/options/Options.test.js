import { expect } from 'chai';
import { stub } from 'sinon';
import Options from '../../../src/option/Options';

describe('#Options', () => {

    let instance = null;

    beforeEach(() => {
        instance = new Options();
    });

    afterEach(() => {
        instance = null;
    })

    describe('#constructor', () => {

        it('should initizalie to empty map', () => {
            expect(instance._options).to.be.a('Map');
            expect(instance._options.size).to.be.equal(0);
        });

    });

    describe('#get options', () => {
        it('should return the options map', () => {
            expect(instance.options).to.be.a('Map');
            expect(instance.options.size).to.be.equal(0);
        });
    });

    describe('#set options', () => {
        it('should set the options map', () => {
            instance.options = new Map();
            expect(instance.options).to.be.a('Map');
            expect(instance.options.size).to.be.equal(0);
        });
    });

    describe('#get', () => {
        it('should return the value if key is set', () => {
            instance.options.set('key1', 'value1');
            expect(instance.get('key1')).to.be.equal('value1');
        });

        it('should throw error if key is not set', () => {
            instance.options.set('key1', 'value1');
            expect(() => instance.get('key2')).to.throws('the options key2 not supported');
        });
    });

    describe('#set', () => {
        it('should set the option', () => {
            instance.set('key1', 'value1');
            expect(instance.get('key1')).to.be.equal('value1');
        });
    });

    describe('#toArray', () => {
        it('should return the empty options as object if ther eis no option', () => {
            expect(instance.toArray()).to.be.eql({});
        });

        it('should return teh non empty options object if it has options', () => {
            instance.set('key1', 'value1');
            expect(instance.toArray()).to.be.eql({key1: 'value1'});
        });
    })

});



