import nock from 'nock';
import chai from 'chai';
import coinbase, { apis } from '../../lib/exchanges/coinbase';
import { success, failure, testErrMsg } from './testUtils';

chai.should();

const rootUrl = apis.rootUrl;

nock(rootUrl)
  .get(apis.unauthenticated.currencies.url)
  .twice()
  .reply(200, apis.unauthenticated.currencies.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.currencies.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(apis.unauthenticated.exchangeRates.url)
  .twice()
  .reply(200, apis.unauthenticated.exchangeRates.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.exchangeRates.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get('/prices/BTC-USD/buy')
  .twice()
  .reply(200, apis.unauthenticated.buyPrice.exampleResponse);

nock(rootUrl)
  .get('/prices/BTC-USD/buy')
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get('/prices/BTC-USD/sell')
  .twice()
  .reply(200, apis.unauthenticated.sellPrice.exampleResponse);

nock(rootUrl)
  .get('/prices/BTC-USD/sell')
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get('/prices/BTC-USD/spot')
  .twice()
  .reply(200, apis.unauthenticated.spotPrice.exampleResponse);

nock(rootUrl)
  .get('/prices/BTC-USD/spot')
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(apis.unauthenticated.time.url)
  .twice()
  .reply(200, apis.unauthenticated.time.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.time.url)
  .twice()
  .replyWithError(testErrMsg);


describe('coinbase', () => {
  describe('currencies', () => {
    context('success call', () => {
      it('retrieves server time using cb', (done) => {
        coinbase.currencies(null, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.currencies.exampleResponse);
          done();
        });
      });

      it('retrieves server time using promise', (done) => {
        coinbase.currencies().then(
          success(apis.unauthenticated.currencies.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        coinbase.currencies(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        coinbase.currencies().then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('exchange rate', () => {
    context('success call', () => {
      it('retrieves exchange rate using cb', (done) => {
        coinbase.exchangeRates(null, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.exchangeRates.exampleResponse);
          done();
        });
      });

      it('retrieves exchange rate using promise', (done) => {
        coinbase.exchangeRates().then(
          success(apis.unauthenticated.exchangeRates.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        coinbase.exchangeRates(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        coinbase.exchangeRates().then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('buy price', () => {
    context('success call', () => {
      it('retrieves total price to buy bitcoin or ether cb', (done) => {
        coinbase.buyPrice({ currencyPair: 'BTC-USD' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.buyPrice.exampleResponse);
          done();
        });
      });

      it('retrieves buy price using promise', (done) => {
        coinbase.buyPrice({ currencyPair: 'BTC-USD' }).then(
          success(apis.unauthenticated.buyPrice.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      // TODO: require the client to input the correct params or else throw good readable err message
      // example below - by setting a required param to null, the error message thrown by the lodash template is a
      // good example of what we want to achieve in a future iteration
      // it('retrieves error using cb', function (done) {
      //    coinbase.buyPrice(null, function (err, resp) {
      //        err.should.deep.equal(testErrMsg)
      //        done();
      //    });
      // });

      it('retrieves error using cb', (done) => {
        coinbase.buyPrice({ currencyPair: 'BTC-USD' }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        coinbase.buyPrice({ currencyPair: 'BTC-USD' }).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('sell price', () => {
    context('success call', () => {
      it('retrieves total price to sell bitcoin or ether cb', (done) => {
        coinbase.sellPrice({ currencyPair: 'BTC-USD' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.sellPrice.exampleResponse);
          done();
        });
      });

      it('retrieves sell price using promise', (done) => {
        coinbase.sellPrice({ currencyPair: 'BTC-USD' }).then(
          success(apis.unauthenticated.sellPrice.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        coinbase.sellPrice({ currencyPair: 'BTC-USD' }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        coinbase.sellPrice({ currencyPair: 'BTC-USD' }).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('spot price', () => {
    context('success call', () => {
      it('retrieves current spot price of bitcoin or ether cb', (done) => {
        coinbase.spotPrice({ currencyPair: 'BTC-USD' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.spotPrice.exampleResponse);
          done();
        });
      });

      it('retrieves spot price using promise', (done) => {
        coinbase.spotPrice({ currencyPair: 'BTC-USD' }).then(
          success(apis.unauthenticated.spotPrice.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        coinbase.spotPrice({ currencyPair: 'BTC-USD' }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        coinbase.spotPrice({ currencyPair: 'BTC-USD' }).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('time', () => {
    context('success call', () => {
      it('retrieves coinbase api server time', (done) => {
        coinbase.time(null, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.time.exampleResponse);
          done();
        });
      });

      it('retrieves api server time using promise', (done) => {
        coinbase.time().then(
          success(apis.unauthenticated.time.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        coinbase.time(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        coinbase.time().then(
          success,
          failure(done),
        );
      });
    });
  });
});
