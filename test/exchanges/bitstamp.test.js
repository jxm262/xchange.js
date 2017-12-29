import nock from 'nock';
import chai from 'chai';
import bitstamp, { apis } from '../../lib/exchanges/bitstamp';
import { success, failure, testErrMsg } from './testUtils';

chai.should();

const rootUrl = apis.rootUrl;

nock(rootUrl)
  .get('/ticker/btcusd')
  .twice()
  .reply(200, apis.unauthenticated.ticker.exampleResponse);

nock(rootUrl)
  .get('/ticker/btcusd')
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get('/ticker_hour/btcusd')
  .twice()
  .reply(200, apis.unauthenticated.hourlyTicker.exampleResponse);

nock(rootUrl)
  .get('/ticker_hour/btcusd')
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get('/order_book/btcusd')
  .twice()
  .reply(200, apis.unauthenticated.orderBook.exampleResponse);

nock(rootUrl)
  .get('/order_book/btcusd')
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get('/transactions/btcusd')
  .twice()
  .reply(200, apis.unauthenticated.transactions.exampleResponse);

nock(rootUrl)
  .get('/transactions/btcusd')
  .twice()
  .replyWithError(testErrMsg);


describe('bitstamp', () => {
  describe('ticker', () => {
    context('success call', () => {
      it('retrieves ticker data using cb', (done) => {
        bitstamp.ticker({ currencyPair: 'btcusd' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.ticker.exampleResponse);
          done();
        });
      });

      it('retrieves ticker using promise', (done) => {
        bitstamp.ticker({ currencyPair: 'btcusd' }).then(
          success(apis.unauthenticated.ticker.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        bitstamp.ticker({ currencyPair: 'btcusd' }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        bitstamp.ticker({ currencyPair: 'btcusd' }).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('hourly ticker', () => {
    context('success call', () => {
      it('retrieves hourly ticker data using cb', (done) => {
        bitstamp.hourlyTicker({ currencyPair: 'btcusd' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.hourlyTicker.exampleResponse);
          done();
        });
      });

      it('retrieves hourly ticker using promise', (done) => {
        bitstamp.hourlyTicker({ currencyPair: 'btcusd' }).then(
          success(apis.unauthenticated.hourlyTicker.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        bitstamp.hourlyTicker({ currencyPair: 'btcusd' }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        bitstamp.hourlyTicker({ currencyPair: 'btcusd' }).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('order book', () => {
    context('success call', () => {
      it('retrieves order book data using cb', (done) => {
        bitstamp.orderBook({ currencyPair: 'btcusd' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.orderBook.exampleResponse);
          done();
        });
      });

      it('retrieves order book using promise', (done) => {
        bitstamp.orderBook({ currencyPair: 'btcusd' }).then(
          success(apis.unauthenticated.orderBook.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        bitstamp.orderBook({ currencyPair: 'btcusd' }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        bitstamp.orderBook({ currencyPair: 'btcusd' }).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('order book', () => {
    context('success call', () => {
      it('retrieves transactions data using cb', (done) => {
        bitstamp.transactions({ currencyPair: 'btcusd' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.transactions.exampleResponse);
          done();
        });
      });

      it('retrieves transactions data using promise', (done) => {
        bitstamp.transactions({ currencyPair: 'btcusd' }).then(
          success(apis.unauthenticated.transactions.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        bitstamp.transactions({ currencyPair: 'btcusd' }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        bitstamp.transactions({ currencyPair: 'btcusd' }).then(
          success,
          failure(done),
        );
      });
    });
  });
});
