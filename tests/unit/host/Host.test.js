import Host from '../../../src/host/Host';
import { expect } from 'chai';
import { stub } from 'sinon';

describe('#Host', () => {

    describe('#constructor', () => {

        it('should set host and port', () => {
            let instance = new Host('localhost', 27017);
            expect(instance.host).to.be.equal('localhost');
        });

    })
})
