import { expect } from 'chai';
import { stub } from 'sinon';
import connect from '../../src/connect';
import {ConnectionFactory} from "../../src/connection";
import Options from "../../src/option/Options";
import Hosts from "../../src/host/Hosts";

describe('#connect', () => {

    beforeEach(() => {
        const hosts = new Hosts();
        const options = new Options();

        stub(hosts, 'add');
        stub(options, 'set');
        stub(options, 'get');

        stub(ConnectionFactory, 'create').returns({
            hosts: hosts,
            options: options
        })
    });

    afterEach(() => {

    })

})
