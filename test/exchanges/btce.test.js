import nock from 'nock';
import btce, { apis } from '../../lib/exchanges/btce';
import { success, failure, testErrMsg } from './testUtils';

const rootUrl = apis.rootUrl;

nock(rootUrl)
  .get('/info/btc_usd')
  .twice()
  .reply(200, apis.unauthenticated.info.exampleResponse);

nock(rootUrl)
  .get('/info/btc_usd')
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get('/ticker/btc_usd')
  .twice()
  .reply(200, apis.unauthenticated.ticker.exampleResponse);

nock(rootUrl)
  .get('/ticker/btc_usd')
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get('/depth/btc_usd?limit=1')
  .twice()
  .reply(200, apis.unauthenticated.depth.exampleResponse);

nock(rootUrl)
  .get('/depth/btc_usd?limit=1')
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get('/trades/btc_usd?limit=1')
  .twice()
  .reply(200, apis.unauthenticated.trades.exampleResponse);

nock(rootUrl)
  .get('/trades/btc_usd?limit=1')
  .twice()
  .replyWithError(testErrMsg);


describe('btce', () => {
  describe('info', () => {
    context('success call', () => {
      it('retrieves info data on currency pair using cb', (done) => {
        btce.info({ currencyPair: 'btc_usd' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.info.exampleResponse);
          done();
        });
      });

      it('retrieves info data using promise', (done) => {
        btce.info({ currencyPair: 'btc_usd' }).then(
          success(apis.unauthenticated.info.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        btce.info({ currencyPair: 'btc_usd' }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        btce.info({ currencyPair: 'btc_usd' }).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('ticker', () => {
    context('success call', () => {
      it('retrieves ticker data on currency pair using cb', (done) => {
        btce.ticker({ currencyPair: 'btc_usd' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.ticker.exampleResponse);
          done();
        });
      });

      it('retrieves ticker data using promise', (done) => {
        btce.ticker({ currencyPair: 'btc_usd' }).then(
          success(apis.unauthenticated.ticker.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        btce.ticker({ currencyPair: 'btc_usd' }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        btce.ticker({ currencyPair: 'btc_usd' }).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('depth', () => {
    context('success call', () => {
      it('retrieves depth data using cb', (done) => {
        btce.depth({ currencyPair: 'btc_usd', limit: 1 }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.depth.exampleResponse);
          done();
        });
      });

      it('retrieves depth data using promise', (done) => {
        btce.depth({ currencyPair: 'btc_usd', limit: 1 }).then(
          success(apis.unauthenticated.depth.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        btce.depth({ currencyPair: 'btc_usd', limit: 1 }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        btce.depth({ currencyPair: 'btc_usd', limit: 1 }).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('trades', () => {
    context('success call', () => {
      it('retrieves trades data using cb', (done) => {
        btce.trades({ currencyPair: 'btc_usd', limit: 1 }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.trades.exampleResponse);
          done();
        });
      });

      it('retrieves trades data using promise', (done) => {
        btce.trades({ currencyPair: 'btc_usd', limit: 1 }).then(
          success(apis.unauthenticated.trades.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        btce.trades({ currencyPair: 'btc_usd', limit: 1 }, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        btce.trades({ currencyPair: 'btc_usd', limit: 1 }).then(
          success,
          failure(done),
        );
      });
    });
  });
});
