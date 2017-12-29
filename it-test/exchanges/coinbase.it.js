// eslint-disable-next-line
import chai from 'chai';
import xchange from '../../lib/xchange';

const should = chai.should();


describe('coinbase apis', () => {
  describe('currencies', () => {
    it('completes successfully', (done) => {
      xchange.coinbase.currencies(null, (err, response) => {
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
      xchange.coinbase.exchangeRates(null, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Buy Price', () => {
    it('completes successfully', (done) => {
      const params = {
        currencyPair: 'BTC-USD',
      };

      xchange.coinbase.buyPrice(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Sell Price', () => {
    it('completes successfully', (done) => {
      const params = {
        currencyPair: 'BTC-USD',
      };

      xchange.coinbase.sellPrice(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Spot Price', () => {
    it('completes successfully', (done) => {
      const params = {
        currencyPair: 'BTC-USD',
      };

      xchange.coinbase.spotPrice(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('Time', () => {
    it('completes successfully', (done) => {
      xchange.coinbase.time(null, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });
});
