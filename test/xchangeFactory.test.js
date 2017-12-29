import xchangeFactory from '../lib/xchangeFactory';

describe('xchangeFactory', () => {
  const xchange = xchangeFactory();

  it('contains all the exchanges overriden from the legacy app', () => {
    const exchanges = Object.keys(xchange).sort();
    exchanges.should.deep.equal([
      'bitfinex',
      'bitstamp',
      'btce',
      'coinbase',
      'kraken',
      'okcoin',
    ]);
  });
});
