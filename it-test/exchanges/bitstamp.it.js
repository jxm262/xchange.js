// eslint-disable-next-line
import chai from 'chai';
import xchange from '../../lib/xchange';

const should = chai.should();


describe('bitstamp apis', () => {
  describe('ticker', () => {
    it('completes successfully', (done) => {
      const params = {
        currencyPair: 'btcusd',
      };

      xchange.bitstamp.ticker(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('hourly ticker', () => {
    it('completes successfully', (done) => {
      const params = {
        currencyPair: 'btcusd',
      };

      xchange.bitstamp.hourlyTicker(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('order book', () => {
    it('completes successfully', (done) => {
      const params = {
        currencyPair: 'btcusd',
      };

      xchange.bitstamp.orderBook(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('transactions', () => {
    it('completes successfully', (done) => {
      const params = {
        currencyPair: 'btcusd',
        time: 'hour',
      };

      xchange.bitstamp.transactions(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });
});
