import nock from 'nock';
import chai from 'chai';
import sinon from 'sinon';
import okcoin, { apis } from '../../lib/exchanges/okcoin'
import { success, failure, testErrMsg } from './testUtils'

const rootUrl = apis.rootUrl;

nock(rootUrl)
    .get(apis.unauthenticated.ticker.url + '?symbol=ltc_usd')
    .twice()
    .reply(200, apis.unauthenticated.ticker.exampleResponse);

nock(rootUrl)
    .get(apis.unauthenticated.ticker.url)
    .twice()
    .replyWithError(testErrMsg);

nock(rootUrl)
    .get(apis.unauthenticated.depth.url + '?symbol=ltc_usd&size=1&merge=1')
    .twice()
    .reply(200, apis.unauthenticated.depth.exampleResponse);

nock(rootUrl)
    .get(apis.unauthenticated.depth.url)
    .twice()
    .replyWithError(testErrMsg);

nock(rootUrl)
    .get(apis.unauthenticated.trades.url + '?symbol=ltc_usd&since=49161637')
    .twice()
    .reply(200, apis.unauthenticated.trades.exampleResponse);

nock(rootUrl)
    .get(apis.unauthenticated.trades.url)
    .twice()
    .replyWithError(testErrMsg);

nock(rootUrl)
    .get(apis.unauthenticated.kline.url + '?symbol=ltc_usd&type=30min&size=3&since=1417536000000')
    .twice()
    .reply(200, apis.unauthenticated.kline.exampleResponse);

nock(rootUrl)
    .get(apis.unauthenticated.kline.url)
    .twice()
    .replyWithError(testErrMsg);

nock(rootUrl)
    .get(apis.unauthenticated.futureTicker.url + '?symbol=ltc_usd&contract_type=this_week')
    .twice()
    .reply(200, apis.unauthenticated.futureTicker.exampleResponse);

nock(rootUrl)
    .get(apis.unauthenticated.futureTicker.url)
    .twice()
    .replyWithError(testErrMsg);

nock(rootUrl)
    .get(apis.unauthenticated.futureTicker.url + '?symbol=ltc_usd&contract_type=this_week')
    .twice()
    .reply(200, apis.unauthenticated.futureTicker.exampleResponse);

nock(rootUrl)
    .get(apis.unauthenticated.futureTicker.url)
    .twice()
    .replyWithError(testErrMsg);

nock(rootUrl)
    .get(apis.unauthenticated.futureDepth.url + '?symbol=ltc_usd&contract_type=this_week&size=1&merge=1')
    .twice()
    .reply(200, apis.unauthenticated.futureDepth.exampleResponse);

nock(rootUrl)
    .get(apis.unauthenticated.futureDepth.url)
    .twice()
    .replyWithError(testErrMsg);

nock(rootUrl)
    .get(apis.unauthenticated.futureTrades.url + '?symbol=ltc_usd&contract_type=this_week')
    .twice()
    .reply(200, apis.unauthenticated.futureTrades.exampleResponse);

nock(rootUrl)
    .get(apis.unauthenticated.futureTrades.url)
    .twice()
    .replyWithError(testErrMsg);

nock(rootUrl)
    .get(apis.unauthenticated.futureIndex.url + '?symbol=ltc_usd')
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
    .get(apis.unauthenticated.futureEstimatedPrice.url + '?symbol=ltc_usd')
    .twice()
    .reply(200, apis.unauthenticated.futureEstimatedPrice.exampleResponse);

nock(rootUrl)
    .get(apis.unauthenticated.futureEstimatedPrice.url)
    .twice()
    .replyWithError(testErrMsg);

nock(rootUrl)
    .get(apis.unauthenticated.futureKline.url + '?symbol=ltc_usd&type=30min&contract_type=this_week&size=3&since=1417536000000')
    .twice()
    .reply(200, apis.unauthenticated.futureKline.exampleResponse);

nock(rootUrl)
    .get(apis.unauthenticated.futureKline.url)
    .twice()
    .replyWithError(testErrMsg);

nock(rootUrl)
    .get(apis.unauthenticated.futureHoldAmount.url + '?symbol=ltc_usd&contract_type=this_week')
    .twice()
    .reply(200, apis.unauthenticated.futureHoldAmount.exampleResponse);

nock(rootUrl)
    .get(apis.unauthenticated.futureHoldAmount.url)
    .twice()
    .replyWithError(testErrMsg);


describe('okcoin', function () {

    describe('ticker', function () {

        context('success call', function () {
            it('retrieves ticker data using cb', function (done) {
                okcoin.ticker({symbol: 'ltc_usd'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.ticker.exampleResponse);
                    done();
                });
            });

            it('retrieves ticker using promise', function (done) {
                okcoin.ticker({symbol: 'ltc_usd'}).then(
                    success(apis.unauthenticated.ticker.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                okcoin.ticker(null, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                okcoin.ticker(null).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('depth', function () {

        context('success call', function () {
            it('retrieves depth data using cb', function (done) {
                okcoin.depth({symbol: 'ltc_usd', size: '1', merge: '1'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.depth.exampleResponse);
                    done();
                });
            });

            it('retrieves depth using promise', function (done) {
                okcoin.depth({symbol: 'ltc_usd', size: '1', merge: '1'}).then(
                    success(apis.unauthenticated.depth.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                okcoin.depth(null, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                okcoin.depth(null).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('trades', function () {

        context('success call', function () {
            it('retrieves recent trades data using cb', function (done) {
                okcoin.trades({symbol: 'ltc_usd', since: '49161637'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.trades.exampleResponse);
                    done();
                });
            });

            it('retrieves recent trades using promise', function (done) {
                okcoin.trades({symbol: 'ltc_usd', since: '49161637'}).then(
                    success(apis.unauthenticated.trades.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                okcoin.trades(null, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                okcoin.trades(null).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('kline', function () {

        context('success call', function () {
            it('retrieves kline data using cb', function (done) {
                okcoin.kline({symbol: 'ltc_usd', type: '30min', 'size': '3', since: '1417536000000'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.kline.exampleResponse);
                    done();
                });
            });

            it('retrieves recent kline using promise', function (done) {
                okcoin.kline({symbol: 'ltc_usd', type: '30min', 'size': '3', since: '1417536000000'}).then(
                    success(apis.unauthenticated.kline.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                okcoin.kline(null, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                okcoin.kline(null).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('futureTicker', function () {

        context('success call', function () {
            it('retrieves latest future ticker data using cb', function (done) {
                okcoin.futureTicker({symbol: 'ltc_usd', contractType: 'this_week'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.futureTicker.exampleResponse);
                    done();
                });
            });

            it('retrieves futures ticker data using promise', function (done) {
                okcoin.futureTicker({symbol: 'ltc_usd', contractType: 'this_week'}).then(
                    success(apis.unauthenticated.futureTicker.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                okcoin.futureTicker(null, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                okcoin.futureTicker(null).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('futureDepth', function () {

        context('success call', function () {
            it('retrieves latest future depth data using cb', function (done) {
                okcoin.futureDepth({symbol: 'ltc_usd', contractType: 'this_week', size: '1', merge: '1'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.futureDepth.exampleResponse);
                    done();
                });
            });

            it('retrieves futures depth data using promise', function (done) {
                okcoin.futureDepth({symbol: 'ltc_usd', contractType: 'this_week', size: '1', merge: '1'}).then(
                    success(apis.unauthenticated.futureDepth.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                okcoin.futureDepth(null, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                okcoin.futureDepth(null).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('futureTrades', function () {

        context('success call', function () {
            it('retrieves latest futures trades data using cb', function (done) {
                okcoin.futureTrades({symbol: 'ltc_usd', contractType: 'this_week'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.futureTrades.exampleResponse);
                    done();
                });
            });

            it('retrieves futures trades data using promise', function (done) {
                okcoin.futureTrades({symbol: 'ltc_usd', contractType: 'this_week'}).then(
                    success(apis.unauthenticated.futureTrades.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                okcoin.futureTrades(null, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                okcoin.futureTrades(null).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('futureIndex', function () {

        context('success call', function () {
            it('retrieves latest futures index price using cb', function (done) {
                okcoin.futureIndex({symbol: 'ltc_usd'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.futureIndex.exampleResponse);
                    done();
                });
            });

            it('retrieves futures index price using promise', function (done) {
                okcoin.futureIndex({symbol: 'ltc_usd'}).then(
                    success(apis.unauthenticated.futureIndex.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                okcoin.futureIndex(null, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                okcoin.futureIndex(null).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('exchange rate', function () {

        context('success call', function () {
            it('retrieves latest okcoin exchange rate using cb', function (done) {
                okcoin.exchangeRate(null, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.exchangeRate.exampleResponse);
                    done();
                });
            });

            it('retrieves exchnage rate using promise', function (done) {
                okcoin.exchangeRate(null).then(
                    success(apis.unauthenticated.exchangeRate.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                okcoin.exchangeRate(null, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                okcoin.exchangeRate(null).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('future estimated price', function () {

        context('success call', function () {
            it('retrieves futures estimated price using cb', function (done) {
                okcoin.futureEstimatedPrice({symbol: 'ltc_usd'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.futureEstimatedPrice.exampleResponse);
                    done();
                });
            });

            it('retrieves futures estimated price using promise', function (done) {
                okcoin.futureEstimatedPrice({symbol: 'ltc_usd'}).then(
                    success(apis.unauthenticated.futureEstimatedPrice.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                okcoin.futureEstimatedPrice(null, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                okcoin.futureEstimatedPrice(null).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('future kline', function () {

        context('success call', function () {
            it('retrieves futures kline data cb', function (done) {
                okcoin.futureKline({symbol: 'ltc_usd', type: '30min', contractType: 'this_week', 'size': '3', since: '1417536000000'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.futureKline.exampleResponse);
                    done();
                });
            });

            it('retrieves futures kline data using promise', function (done) {
                okcoin.futureKline({symbol: 'ltc_usd', type: '30min', contractType: 'this_week', 'size': '3', since: '1417536000000'}).then(
                    success(apis.unauthenticated.futureKline.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                okcoin.futureKline(null, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                okcoin.futureKline(null).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('future hold amount', function () {

        context('success call', function () {
            it('retrieves futures hold amount data cb', function (done) {
                okcoin.futureHoldAmount({symbol: 'ltc_usd', contractType: 'this_week'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.futureHoldAmount.exampleResponse);
                    done();
                });
            });

            it('retrieves futures hold amount data using promise', function (done) {
                okcoin.futureHoldAmount({symbol: 'ltc_usd', contractType: 'this_week'}).then(
                    success(apis.unauthenticated.futureHoldAmount.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                okcoin.futureHoldAmount(null, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                okcoin.futureHoldAmount(null).then(
                    success,
                    failure(done)
                );
            });
        });
    });


});
