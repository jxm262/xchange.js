import nock from 'nock';
import chai from 'chai';
import sinon from 'sinon';
import xchangeFactory from '../lib/xchangeFactory'

describe('xchangeFactory', function () {
    const xchange = xchangeFactory();

    it.only('contains all the exchanges overriden from the legacy app', function () {
        const exchanges = Object.keys(xchange).sort()
        exchanges.should.deep.equal([
            'bitfinex',
            'bitstamp',
            'coinbase',
            'kraken',
            'okcoin'
        ])
    });
});
