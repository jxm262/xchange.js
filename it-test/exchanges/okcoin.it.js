// eslint-disable-next-line
import chai from 'chai';
import xchange from '../../lib/xchange';

const should = chai.should();


describe('OkCoin apis', () => {
  describe('Ticker', () => {
    it('completes successfully', (done) => {
      const params = {
        symbol: 'ltc_usd',
      };

      xchange.okcoin.ticker(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Depth', () => {
    it('completes successfully', (done) => {
      const params = {
        symbol: 'ltc_usd',
        size: 3,
        merge: 1,

      };

      xchange.okcoin.depth(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Trades', () => {
    it('completes successfully', (done) => {
      const params = {
        symbol: 'ltc_usd',
        since: 49161630,
      };

      xchange.okcoin.trades(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Kline', () => {
    it('completes successfully', (done) => {
      const params = {
        symbol: 'ltc_usd',
        type: '30min',
        size: 3,
        since: 1417536000000,
      };

      xchange.okcoin.kline(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Futures Ticker', () => {
    it('completes successfully', (done) => {
      const params = {
        symbol: 'ltc_usd',
        contractType: 'this_week',
      };

      xchange.okcoin.futureTicker(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Futures Depth', () => {
    it('completes successfully', (done) => {
      const params = {
        symbol: 'ltc_usd',
        contractType: 'this_week',
        size: 1,
        merge: 1,
      };

      xchange.okcoin.futureTicker(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Futures Trades', () => {
    it('completes successfully', (done) => {
      const params = {
        symbol: 'ltc_usd',
        contractType: 'this_week',
      };

      xchange.okcoin.futureTrades(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Futures Index', () => {
    it('completes successfully', (done) => {
      const params = {
        symbol: 'ltc_usd',
      };

      xchange.okcoin.futureIndex(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Exchange Rate', () => {
    it('completes successfully', (done) => {
      xchange.okcoin.exchangeRate(null, (err, response) => {
        if (err) {
          console.log('---err... ', err);
        }
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Futures Estimated Price', () => {
    it('completes successfully', (done) => {
      xchange.okcoin.futureEstimatedPrice(null, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Futures Kline', () => {
    it('completes successfully', (done) => {
      const params = {
        symbol: 'ltc_usd',
        type: '30min',
        contractType: 'this_week',
        size: 3,
        since: 1417536000000,
      };

      xchange.okcoin.futureKline(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Futures Hold Amount', () => {
    it('completes successfully', (done) => {
      const params = {
        symbol: 'ltc_usd',
        contractType: 'this_week',
      };

      xchange.okcoin.futureHoldAmount(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Futures Hold Amount', () => {
    it('completes successfully', (done) => {
      const params = {
        symbol: 'ltc_usd',
        contractType: 'this_week',
      };

      xchange.okcoin.futureHoldAmount(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Futures Price Limit', () => {
    it('completes successfully', (done) => {
      const params = {
        symbol: 'ltc_usd',
        contractType: 'this_week',
      };

      xchange.okcoin.futurePriceLimit(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });
});
