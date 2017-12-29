import nock from 'nock';
import chai from 'chai';
import kraken, { apis } from '../../lib/exchanges/kraken';

chai.should();


const errMsg = { msg: 'test-error' };
const rootUrl = apis.rootUrl;

nock(rootUrl)
  .get(apis.unauthenticated.serverTime.url)
  .twice()
  .reply(200, apis.unauthenticated.serverTime.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.serverTime.url)
  .twice()
  .replyWithError(errMsg);

nock(rootUrl)
  .get(apis.unauthenticated.assets.url)
  .twice()
  .reply(200, apis.unauthenticated.assets.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.assets.url)
  .twice()
  .replyWithError(errMsg);

nock(rootUrl)
  .get(apis.unauthenticated.assetPairs.url)
  .twice()
  .reply(200, apis.unauthenticated.assetPairs.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.assetPairs.url)
  .twice()
  .replyWithError(errMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.ohlc.url}?pair=USDTZUSD`)
  .twice()
  .reply(200, apis.unauthenticated.ohlc.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.ohlc.url)
  .twice()
  .replyWithError(errMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.orderBook.url}?pair=USDTZUSD`)
  .twice()
  .reply(200, apis.unauthenticated.orderBook.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.orderBook.url)
  .twice()
  .replyWithError(errMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.recentTrades.url}?pair=USDTZUSD`)
  .twice()
  .reply(200, apis.unauthenticated.recentTrades.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.recentTrades.url)
  .twice()
  .replyWithError(errMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.recentSpread.url}?pair=USDTZUSD`)
  .twice()
  .reply(200, apis.unauthenticated.recentSpread.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.recentSpread.url)
  .twice()
  .replyWithError(errMsg);


function success(expected, done) {
  return function (resp) {
    resp.should.deep.equal(expected);
    done();
  };
}

function failure(done) {
  return function (err) {
    err.should.deep.equal(errMsg);
    done();
  };
}


describe('kraken', () => {
  describe('serverTime', () => {
    context('success call', () => {
      it('retrieves server time using cb', (done) => {
        kraken.serverTime(null, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.serverTime.exampleResponse);
          done();
        });
      });

      it('retrieves server time using promise', (done) => {
        kraken.serverTime().then(
          success(apis.unauthenticated.serverTime.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        kraken.serverTime(null, (err) => {
          err.should.deep.equal(errMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        kraken.serverTime().then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('assets', () => {
    context('success call', () => {
      it('retrieves asset info using cb', (done) => {
        kraken.assets(null, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.assets.exampleResponse);
          done();
        });
      });

      it('retrieves asset info using using promise', (done) => {
        kraken.assets(null).then(
          success(apis.unauthenticated.assets.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        kraken.assets(null, (err) => {
          err.should.deep.equal(errMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        kraken.assets().then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('asset pairs', () => {
    context('success call', () => {
      it('retrieves asset pairs using cb', (done) => {
        kraken.assetPairs(null, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.assetPairs.exampleResponse);
          done();
        });
      });

      it('retrieves asset pairs using using promise', (done) => {
        kraken.assetPairs().then(
          success(apis.unauthenticated.assetPairs.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        kraken.assetPairs(null, (err) => {
          err.should.deep.equal(errMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        kraken.assetPairs().then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('ohlc', () => {
    const data = { pair: ['USDTZUSD'] };

    context('success call', () => {
      it('retrieves array of pair name and ohlc using cb', (done) => {
        kraken.ohlc(data, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.ohlc.exampleResponse);
          done();
        });
      });

      it('retrieves array of pair name and ohlc using using promise', (done) => {
        kraken.ohlc(data).then(
          success(apis.unauthenticated.ohlc.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        kraken.ohlc(null, (err) => {
          err.should.deep.equal(errMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        kraken.ohlc().then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('orderBook', () => {
    const data = { pair: 'USDTZUSD' };

    context('success call', () => {
      it('retrieves array of pair name and market depth using cb', (done) => {
        kraken.orderBook(data, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.orderBook.exampleResponse);
          done();
        });
      });

      it('retrieves array of pair name and market depth using promise', (done) => {
        kraken.orderBook(data).then(
          success(apis.unauthenticated.orderBook.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        kraken.orderBook(null, (err) => {
          err.should.deep.equal(errMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        kraken.orderBook().then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('recentTrades', () => {
    const data = { pair: 'USDTZUSD' };

    context('success call', () => {
      it('retrieves array of pair name and recent trade data using cb', (done) => {
        kraken.recentTrades(data, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.recentTrades.exampleResponse);
          done();
        });
      });

      it('retrieves array of pair name and recent trade data using promise', (done) => {
        kraken.recentTrades(data).then(
          success(apis.unauthenticated.recentTrades.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        kraken.recentTrades(null, (err) => {
          err.should.deep.equal(errMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        kraken.recentTrades().then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('recentSpread', () => {
    const data = { pair: 'USDTZUSD' };

    context('success call', () => {
      it('retrieves array of pair name and recent spread data using cb', (done) => {
        kraken.recentSpread(data, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.recentSpread.exampleResponse);
          done();
        });
      });

      it('retrieves array of pair name and recent spread data using promise', (done) => {
        kraken.recentSpread(data).then(
          success(apis.unauthenticated.recentSpread.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        kraken.recentSpread(null, (err) => {
          err.should.deep.equal(errMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        kraken.recentSpread().then(
          success,
          failure(done),
        );
      });
    });
  });
});
