// eslint-disable-next-line
import chai from 'chai';
import xchange from '../../lib/xchange';

const should = chai.should();


describe('kraken apis', () => {
  describe('Server Time', () => {
    it('completes successfully', (done) => {
      xchange.kraken.serverTime(null, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Assets', () => {
    it('completes successfully', (done) => {
      const params = {
        info: 'info',
        aclass: 'currency',
        asset: ['DASH', 'USDT'],
      };

      xchange.kraken.assets(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Asset Pairs', () => {
    it('completes successfully', (done) => {
      const params = {
        info: 'info',
        pair: ['USDTZUSD', 'DASHUSD'],
      };

      xchange.kraken.assetPairs(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('OHLC', () => {
    it('completes successfully', (done) => {
      const params = {
        pair: 'USDTZUSD',
        interval: 5,
        since: 1491269700,
      };

      xchange.kraken.ohlc(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Order Book', () => {
    it('completes successfully', (done) => {
      const params = {
        pair: 'USDTZUSD',
        count: 5,
      };

      xchange.kraken.orderBook(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Recent Trades', () => {
    it('completes successfully', (done) => {
      const params = {
        pair: 'USDTZUSD',
        since: 1491269156362842889,
      };

      xchange.kraken.recentTrades(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Recent Spread', () => {
    it('completes successfully', (done) => {
      const params = {
        pair: 'USDTZUSD',
        since: 1491269156362842889,
      };

      xchange.kraken.recentSpread(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });
});
