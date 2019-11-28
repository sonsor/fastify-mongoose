import { Host } from '../../../src/host';
import { expect } from 'chai';
import { stub } from 'sinon';

describe('#Host', () => {
    it('should ', () => {
        new Host('test', 1);
        expect(1).to.be.equal(1);
    });
})
