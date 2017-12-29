// eslint-disable-next-line
import chai from 'chai';
import xchange from '../../lib/xchange';

const should = chai.should();


describe('btc-e apis', () => {
  describe('info', () => {
    it('completes successfully', (done) => {
      const params = {
        currencyPair: 'btc_usd',
      };

      xchange.btce.info(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('ticker', () => {
    it('completes successfully', (done) => {
      const params = {
        currencyPair: 'btc_usd',
      };

      xchange.btce.ticker(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('depth', () => {
    it('completes successfully', (done) => {
      const params = {
        currencyPair: 'btc_usd',
        limit: 5,
      };

      xchange.btce.depth(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('trades', () => {
    it('completes successfully', (done) => {
      const params = {
        currencyPair: 'btc_usd',
        limit: 5,
      };

      xchange.btce.trades(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });
});
