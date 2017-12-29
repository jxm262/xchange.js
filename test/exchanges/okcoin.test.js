import nock from 'nock';
import okcoin, { apis } from '../../lib/exchanges/okcoin';
import { success, failure, testErrMsg } from './testUtils';

const rootUrl = apis.rootUrl;


nock(rootUrl)
  .get(`${apis.unauthenticated.ticker.url}?symbol=ltc_usd`)
  .twice()
  .reply(200, apis.unauthenticated.ticker.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.ticker.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.depth.url}?symbol=ltc_usd&size=1&merge=1`)
  .twice()
  .reply(200, apis.unauthenticated.depth.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.depth.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.trades.url}?symbol=ltc_usd&since=49161637`)
  .twice()
  .reply(200, apis.unauthenticated.trades.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.trades.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.kline.url}?symbol=ltc_usd&type=30min&size=3&since=1417536000000`)
  .twice()
  .reply(200, apis.unauthenticated.kline.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.kline.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.futureTicker.url}?symbol=ltc_usd&contract_type=this_week`)
  .twice()
  .reply(200, apis.unauthenticated.futureTicker.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.futureTicker.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.futureTicker.url}?symbol=ltc_usd&contract_type=this_week`)
  .twice()
  .reply(200, apis.unauthenticated.futureTicker.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.futureTicker.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.futureDepth.url}?symbol=ltc_usd&contract_type=this_week&size=1&merge=1`)
  .twice()
  .reply(200, apis.unauthenticated.futureDepth.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.futureDepth.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.futureTrades.url}?symbol=ltc_usd&contract_type=this_week`)
  .twice()
  .reply(200, apis.unauthenticated.futureTrades.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.futureTrades.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.futureIndex.url}?symbol=ltc_usd`)
  .twice()
  .reply(200, apis.unauthenticated.futureIndex.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.futureIndex.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(apis.unauthenticated.exchangeRate.url)
  .twice()
  .reply(200, apis.unauthenticated.exchangeRate.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.exchangeRate.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.futureEstimatedPrice.url}?symbol=ltc_usd`)
  .twice()
  .reply(200, apis.unauthenticated.futureEstimatedPrice.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.futureEstimatedPrice.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.futureKline.url}\
?symbol=ltc_usd&type=30min&contract_type=this_week&size=3&since=1417536000000`)
  .twice()
  .reply(200, apis.unauthenticated.futureKline.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.futureKline.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.futureHoldAmount.url}?symbol=ltc_usd&contract_type=this_week`)
  .twice()
  .reply(200, apis.unauthenticated.futureHoldAmount.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.futureHoldAmount.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.futurePriceLimit.url}?symbol=ltc_usd&contract_type=this_week`)
  .twice()
  .reply(200, apis.unauthenticated.futurePriceLimit.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.futurePriceLimit.url)
  .twice()
  .replyWithError(testErrMsg);

nock(rootUrl)
  .get(`${apis.unauthenticated.otcDepth.url}?symbol=ltc_usd`)
  .twice()
  .reply(200, apis.unauthenticated.otcDepth.exampleResponse);

nock(rootUrl)
  .get(apis.unauthenticated.otcDepth.url)
  .twice()
  .replyWithError(testErrMsg);


describe('okcoin', () => {
  describe('ticker', () => {
    context('success call', () => {
      it('retrieves ticker data using cb', (done) => {
        okcoin.ticker({ symbol: 'ltc_usd' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.ticker.exampleResponse);
          done();
        });
      });

      it('retrieves ticker using promise', (done) => {
        okcoin.ticker({ symbol: 'ltc_usd' }).then(
          success(apis.unauthenticated.ticker.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        okcoin.ticker(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        okcoin.ticker(null).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('depth', () => {
    context('success call', () => {
      it('retrieves depth data using cb', (done) => {
        okcoin.depth({ symbol: 'ltc_usd', size: '1', merge: '1' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.depth.exampleResponse);
          done();
        });
      });

      it('retrieves depth using promise', (done) => {
        okcoin.depth({ symbol: 'ltc_usd', size: '1', merge: '1' }).then(
          success(apis.unauthenticated.depth.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        okcoin.depth(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        okcoin.depth(null).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('trades', () => {
    context('success call', () => {
      it('retrieves recent trades data using cb', (done) => {
        okcoin.trades({ symbol: 'ltc_usd', since: '49161637' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.trades.exampleResponse);
          done();
        });
      });

      it('retrieves recent trades using promise', (done) => {
        okcoin.trades({ symbol: 'ltc_usd', since: '49161637' }).then(
          success(apis.unauthenticated.trades.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        okcoin.trades(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        okcoin.trades(null).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('kline', () => {
    context('success call', () => {
      it('retrieves kline data using cb', (done) => {
        okcoin.kline({ symbol: 'ltc_usd', type: '30min', size: '3', since: '1417536000000' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.kline.exampleResponse);
          done();
        });
      });

      it('retrieves recent kline using promise', (done) => {
        okcoin.kline({ symbol: 'ltc_usd', type: '30min', size: '3', since: '1417536000000' }).then(
          success(apis.unauthenticated.kline.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        okcoin.kline(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        okcoin.kline(null).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('futureTicker', () => {
    context('success call', () => {
      it('retrieves latest future ticker data using cb', (done) => {
        okcoin.futureTicker({ symbol: 'ltc_usd', contractType: 'this_week' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.futureTicker.exampleResponse);
          done();
        });
      });

      it('retrieves futures ticker data using promise', (done) => {
        okcoin.futureTicker({ symbol: 'ltc_usd', contractType: 'this_week' }).then(
          success(apis.unauthenticated.futureTicker.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        okcoin.futureTicker(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        okcoin.futureTicker(null).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('futureDepth', () => {
    context('success call', () => {
      it('retrieves latest future depth data using cb', (done) => {
        okcoin.futureDepth({
          symbol: 'ltc_usd',
          contractType: 'this_week',
          size: '1',
          merge: '1',
        }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.futureDepth.exampleResponse);
          done();
        });
      });

      it('retrieves futures depth data using promise', (done) => {
        okcoin.futureDepth({ symbol: 'ltc_usd', contractType: 'this_week', size: '1', merge: '1' }).then(
          success(apis.unauthenticated.futureDepth.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        okcoin.futureDepth(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        okcoin.futureDepth(null).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('futureTrades', () => {
    context('success call', () => {
      it('retrieves latest futures trades data using cb', (done) => {
        okcoin.futureTrades({ symbol: 'ltc_usd', contractType: 'this_week' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.futureTrades.exampleResponse);
          done();
        });
      });

      it('retrieves futures trades data using promise', (done) => {
        okcoin.futureTrades({ symbol: 'ltc_usd', contractType: 'this_week' }).then(
          success(apis.unauthenticated.futureTrades.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        okcoin.futureTrades(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        okcoin.futureTrades(null).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('futureIndex', () => {
    context('success call', () => {
      it('retrieves latest futures index price using cb', (done) => {
        okcoin.futureIndex({ symbol: 'ltc_usd' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.futureIndex.exampleResponse);
          done();
        });
      });

      it('retrieves futures index price using promise', (done) => {
        okcoin.futureIndex({ symbol: 'ltc_usd' }).then(
          success(apis.unauthenticated.futureIndex.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        okcoin.futureIndex(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        okcoin.futureIndex(null).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('exchange rate', () => {
    context('success call', () => {
      it('retrieves latest okcoin exchange rate using cb', (done) => {
        okcoin.exchangeRate(null, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.exchangeRate.exampleResponse);
          done();
        });
      });

      it('retrieves exchnage rate using promise', (done) => {
        okcoin.exchangeRate(null).then(
          success(apis.unauthenticated.exchangeRate.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        okcoin.exchangeRate(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        okcoin.exchangeRate(null).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('future estimated price', () => {
    context('success call', () => {
      it('retrieves futures estimated price using cb', (done) => {
        okcoin.futureEstimatedPrice({ symbol: 'ltc_usd' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.futureEstimatedPrice.exampleResponse);
          done();
        });
      });

      it('retrieves futures estimated price using promise', (done) => {
        okcoin.futureEstimatedPrice({ symbol: 'ltc_usd' }).then(
          success(apis.unauthenticated.futureEstimatedPrice.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        okcoin.futureEstimatedPrice(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        okcoin.futureEstimatedPrice(null).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('future kline', () => {
    context('success call', () => {
      it('retrieves futures kline data cb', (done) => {
        okcoin.futureKline({
          symbol: 'ltc_usd',
          type: '30min',
          contractType: 'this_week',
          size: '3',
          since: '1417536000000',
        }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.futureKline.exampleResponse);
          done();
        });
      });

      it('retrieves futures kline data using promise', (done) => {
        okcoin.futureKline({
          symbol: 'ltc_usd',
          type: '30min',
          contractType: 'this_week',
          size: '3',
          since: '1417536000000',
        }).then(
          success(apis.unauthenticated.futureKline.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        okcoin.futureKline(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        okcoin.futureKline(null).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('future hold amount', () => {
    context('success call', () => {
      it('retrieves futures hold amount data cb', (done) => {
        okcoin.futureHoldAmount({ symbol: 'ltc_usd', contractType: 'this_week' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.futureHoldAmount.exampleResponse);
          done();
        });
      });

      it('retrieves futures hold amount data using promise', (done) => {
        okcoin.futureHoldAmount({ symbol: 'ltc_usd', contractType: 'this_week' }).then(
          success(apis.unauthenticated.futureHoldAmount.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        okcoin.futureHoldAmount(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        okcoin.futureHoldAmount(null).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('future price limit', () => {
    context('success call', () => {
      it('retrieves futures price limit data cb', (done) => {
        okcoin.futurePriceLimit({ symbol: 'ltc_usd', contractType: 'this_week' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.futurePriceLimit.exampleResponse);
          done();
        });
      });

      it('retrieves futures price limit data using promise', (done) => {
        okcoin.futurePriceLimit({ symbol: 'ltc_usd', contractType: 'this_week' }).then(
          success(apis.unauthenticated.futurePriceLimit.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        okcoin.futurePriceLimit(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        okcoin.futurePriceLimit(null).then(
          success,
          failure(done),
        );
      });
    });
  });

  describe('otc depth', () => {
    context('success call', () => {
      it('retrieves otc depth data cb', (done) => {
        okcoin.otcDepth({ symbol: 'ltc_usd' }, (err, resp) => {
          resp.should.deep.equal(apis.unauthenticated.otcDepth.exampleResponse);
          done();
        });
      });

      it('retrieves otc depth data using promise', (done) => {
        okcoin.otcDepth({ symbol: 'ltc_usd' }).then(
          success(apis.unauthenticated.otcDepth.exampleResponse, done),
          failure,
        );
      });
    });

    context('failure call', () => {
      it('retrieves error using cb', (done) => {
        okcoin.otcDepth(null, (err) => {
          err.should.deep.equal(testErrMsg);
          done();
        });
      });

      it('retrieves error using promise', (done) => {
        okcoin.otcDepth(null).then(
          success,
          failure(done),
        );
      });
    });
  });
});
