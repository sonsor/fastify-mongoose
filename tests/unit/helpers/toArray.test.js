import toArray from '../../../src/helpers/toArray';
import { expect } from 'chai';

describe('#toArray', () => {

    it('should return the array if pass the string', () => {
        expect(toArray('test')).to.be.a('array');
    });

    it('should return the pass value on 0 index of array', () => {
        expect(toArray('test')[0]).to.be.equal('test');
    });

    it('should return array if we pass array', () => {
        expect(toArray(['test'])).to.be.a('array');
    });

    it('should return passed value as same if array', () => {
        expect(toArray(['test'])).to.eql(['test']);
    });

    it('should return the array if pass the object', () => {
        expect(toArray({a : 1})).to.be.a('array');
    });

    it('should return the pass value to 0 index of array', () => {
        expect(toArray({a : 1}).shift()).to.eql({a: 1});
    });

    it('should return array if pass the number', () => {
        expect(toArray(1)).to.be.a('array');
    });

    it('should return the pass value at 0 index', () => {
        expect(toArray(1).shift()).to.be.equal(1);
    });
});
