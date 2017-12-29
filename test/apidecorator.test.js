import chai from 'chai';
import sinonChai from 'sinon-chai';
import decorator from '../lib/legacy/response-decorator/response-decorator';

chai.should();
chai.use(sinonChai);


describe('decorator.js', () => {
  it("ticker converts exchange's response into the decorated spot price response", () => {
    const resp =
      {
        result: 'true',
        last: 311,
        high: 314.352,
        low: 311,
        avg: 311.597,
        sell: 314.29,
        buy: 311,
        vol_btc: 0.1252,
        vol_usd: 39.012,
      };

    const jsonSchema =
      {
        buy: 'bid',
        sell: 'ask',
        low: 'low',
        high: 'high',
        vol_usd: 'volume',
      };

    decorator.ticker(resp, jsonSchema).should.deep.equal(
      {
        bid: 311,
        ask: 314.29,
        low: 311,
        high: 314.352,
        volume: 39.012,
        timestamp: 0,
      },
    );
  });

  it("ticker converts exchange's response (nested) into the decorated spot price response", () => {
    const resp =
      {
        ticker:
        {
          result: 'true',
          last: 311,
          high: 314.352,
          low: 311,
          avg: 311.597,
          sell: 314.29,
          buy: 311,
          vol_btc: 0.1252,
          vol_usd: 39.012,
        },
      };

    const jsonSchema =
      {
        'ticker.buy': 'bid',
        'ticker.sell': 'ask',
        'ticker.low': 'low',
        'ticker.high': 'high',
        'ticker.vol_usd': 'volume',
      };

    decorator.ticker(resp, jsonSchema).should.deep.equal(
      {
        bid: 311,
        ask: 314.29,
        low: 311,
        high: 314.352,
        volume: 39.012,
        timestamp: 0,
      },
    );
  });
  it('ticker converts kraken exchange response into the decorated spot price response correctly', () => {
    const resp = {
      error: [],
      result: {
        XXBTZUSD: {
          a: ['285.14594', '1'],
          b: ['284.50000', '6'],
          c: ['284.50000', '0.10000000'],
          v: ['132.85652194', '159.76976414'],
          p: ['283.92955', '281.84728'],
          t: [348, 413],
          l: ['268.95604', '268.00001'],
          h: ['297.00000', '297.00000'],
          o: '271.99975',
        },
      },
    };

    const jsonSchema =
      {
        'result.XXBTZUSD.a.0': 'ask',
        'result.XXBTZUSD.b.0': 'bid',
        'result.XXBTZUSD.l.1': 'low',
        'result.XXBTZUSD.h.1': 'high',
        'result.XXBTZUSD.v.1': 'volume',
      };

    decorator.ticker(resp, jsonSchema).should.deep.equal(
      {
        bid: 284.50000,
        ask: 285.14594,
        low: 268.00001,
        high: 297.00000,
        volume: 159.76976414,
        timestamp: 0,
      },
    );
  });
});
