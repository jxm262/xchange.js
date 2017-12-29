import nock from 'nock';
import chai from 'chai';
import bitfinex, { apis } from '../../lib/exchanges/bitfinex';
import { success, failure, testErrMsg } from './testUtils';

chai.should();

const rootUrl = apis.rootUrl;

nock(rootUrl)
  .get('/pubticker/BTCUSD')
  .twice()
  .reply(200, apis.unauthenticated.ticker.exampleResponse);

nock(rootUrl)
  .get('/pubticker/BTCUSD')
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get('/stats/BTCUSD')
  .twice()
  .reply(200, apis.unauthenticated.stats.exampleResponse);

nock(rootUrl)
  .get('/stats/BTCUSD')
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get('/lendbook/USD')
  .twice()
  .reply(200, apis.unauthenticated.fundingBook.exampleResponse);

nock(rootUrl)
  .get('/lendbook/USD')
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get('/book/BTCUSD')
  .twice()
  .reply(200, apis.unauthenticated.orderBook.exampleResponse);

nock(rootUrl)
  .get('/book/BTCUSD')
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get('/trades/BTCUSD')
  .twice()
  .reply(200, apis.unauthenticated.trades.exampleResponse);

nock(rootUrl)
  .get('/trades/BTCUSD')
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get('/lends/USD')
  .twice()
  .reply(200, apis.unauthenticated.lends.exampleResponse);

nock(rootUrl)
  .get('/lends/USD')
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(apis.unauthenticated.symbols.url)
  .twice()
  .reply(200, apis.unauthenticated.symbols.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.symbols.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(apis.unauthenticated.symbolsDetails.url)
  .twice()
  .reply(200, apis.unauthenticated.symbolsDetails.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.symbolsDetails.url)
  .twice()
  .replyWithError(testErrMsg);


describe('bitfinex', () => {
  describe('ticker', () => {
    context('success call', () => {
      it('retrieves ticker data using cb', (done) => {
        bitfinex.ticker({ symbol: 'BTCUSD' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.ticker.exampleResponse);
          done();
        });
      });

      it('retrieves ticker using promise', (done) => {
        bitfinex.ticker({ symbol: 'BTCUSD' }).then(
          success(apis.unauthenticated.ticker.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        bitfinex.ticker({ symbol: 'BTCUSD' }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        bitfinex.ticker({ symbol: 'BTCUSD' }).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('stats', () => {
    context('success call', () => {
      it('retrieves stats data using cb', (done) => {
        bitfinex.stats({ symbol: 'BTCUSD' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.stats.exampleResponse);
          done();
        });
      });

      it('retrieves stats using promise', (done) => {
        bitfinex.stats({ symbol: 'BTCUSD' }).then(
          success(apis.unauthenticated.stats.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        bitfinex.stats({ symbol: 'BTCUSD' }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        bitfinex.stats({ symbol: 'BTCUSD' }).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('funding book', () => {
    context('success call', () => {
      it('retrieves stats data using cb', (done) => {
        bitfinex.fundingBook({ currency: 'USD' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.fundingBook.exampleResponse);
          done();
        });
      });

      it('retrieves stats using promise', (done) => {
        bitfinex.fundingBook({ currency: 'USD' }).then(
          success(apis.unauthenticated.fundingBook.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        bitfinex.fundingBook({ currency: 'USD' }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        bitfinex.fundingBook({ currency: 'USD' }).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('order book', () => {
    context('success call', () => {
      it('retrieves full order book data using cb', (done) => {
        bitfinex.orderBook({ symbol: 'BTCUSD' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.orderBook.exampleResponse);
          done();
        });
      });

      it('retrieves order book using promise', (done) => {
        bitfinex.orderBook({ symbol: 'BTCUSD' }).then(
          success(apis.unauthenticated.orderBook.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        bitfinex.orderBook({ symbol: 'BTCUSD' }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        bitfinex.orderBook({ symbol: 'BTCUSD' }).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('trades', () => {
    context('success call', () => {
      it('retrieves recent trades data using cb', (done) => {
        bitfinex.trades({ symbol: 'BTCUSD' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.trades.exampleResponse);
          done();
        });
      });

      it('retrieves recent trades using promise', (done) => {
        bitfinex.trades({ symbol: 'BTCUSD' }).then(
          success(apis.unauthenticated.trades.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        bitfinex.trades({ symbol: 'BTCUSD' }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        bitfinex.trades({ symbol: 'BTCUSD' }).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('lends', () => {
    context('success call', () => {
      it('retrieves recent funding data using cb', (done) => {
        bitfinex.lends({ currency: 'USD' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.lends.exampleResponse);
          done();
        });
      });

      it('retrieves recent funding data using promise', (done) => {
        bitfinex.lends({ currency: 'USD' }).then(
          success(apis.unauthenticated.lends.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        bitfinex.lends({ currency: 'USD' }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        bitfinex.lends({ currency: 'USD' }).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('symbols', () => {
    context('success call', () => {
      it('retrieves available symbols using cb', (done) => {
        bitfinex.symbols(null, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.symbols.exampleResponse);
          done();
        });
      });

      it('retrieves symbols data using promise', (done) => {
        bitfinex.symbols().then(
          success(apis.unauthenticated.symbols.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        bitfinex.symbols(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        bitfinex.symbols().then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('symbols details', () => {
    context('success call', () => {
      it('retrieves available symbols using cb', (done) => {
        bitfinex.symbolsDetails(null, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.symbolsDetails.exampleResponse);
          done();
        });
      });

      it('retrieves symbols data using promise', (done) => {
        bitfinex.symbolsDetails().then(
          success(apis.unauthenticated.symbolsDetails.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        bitfinex.symbolsDetails(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        bitfinex.symbolsDetails().then(
          success,
          failure(done),
        );
      });
    });
  });
});
