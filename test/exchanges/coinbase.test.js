import nock from 'nock';
import chai from 'chai';
import sinon from 'sinon';
import coinbase, { apis } from '../../lib/exchanges/coinbase'
import { success, failure, testErrMsg } from './testUtils'

const should = chai.should();

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
    .get(apis.unauthenticated.exchangeRate.url)
    .twice()
    .reply(200, apis.unauthenticated.exchangeRate.exampleResponse);

nock(rootUrl)
    .get(apis.unauthenticated.exchangeRate.url)
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


describe('coinbase', function () {

    describe('currencies', function () {

        context('success call', function () {
            it('retrieves server time using cb', function (done) {
                coinbase.currencies(null, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.currencies.exampleResponse);
                    done();
                });
            });

            it('retrieves server time using promise', function (done) {
                coinbase.currencies().then(
                    success(apis.unauthenticated.currencies.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                coinbase.currencies(null, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                coinbase.currencies().then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('exchange rate', function () {

        context('success call', function () {
            it('retrieves exchange rate using cb', function (done) {
                coinbase.exchangeRate(null, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.exchangeRate.exampleResponse);
                    done();
                });
            });

            it('retrieves exchange rate using promise', function (done) {
                coinbase.exchangeRate().then(
                    success(apis.unauthenticated.exchangeRate.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                coinbase.exchangeRate(null, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                coinbase.exchangeRate().then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('buy price', function () {

        context('success call', function () {
            it('retrieves total price to buy bitcoin or ether cb', function (done) {
                coinbase.buyPrice({currencyPair: 'BTC-USD'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.buyPrice.exampleResponse);
                    done();
                });
            });

            it('retrieves buy price using promise', function (done) {
                coinbase.buyPrice({currencyPair: 'BTC-USD'}).then(
                    success(apis.unauthenticated.buyPrice.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            // TODO: require the client to input the correct params or else throw good readable err message
            // example below - by setting a required param to null, the error message thrown by the lodash template is a good example of what we want to achieve in a future iteration
            //it('retrieves error using cb', function (done) {
            //    coinbase.buyPrice(null, function (err, resp) {
            //        err.should.deep.equal(testErrMsg)
            //        done();
            //    });
            //});

            it('retrieves error using cb', function (done) {
                coinbase.buyPrice({currencyPair: 'BTC-USD'}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                coinbase.buyPrice({currencyPair: 'BTC-USD'}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('sell price', function () {

        context('success call', function () {
            it('retrieves total price to sell bitcoin or ether cb', function (done) {
                coinbase.sellPrice({currencyPair: 'BTC-USD'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.sellPrice.exampleResponse);
                    done();
                });
            });

            it('retrieves sell price using promise', function (done) {
                coinbase.sellPrice({currencyPair: 'BTC-USD'}).then(
                    success(apis.unauthenticated.sellPrice.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                coinbase.sellPrice({currencyPair: 'BTC-USD'}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                coinbase.sellPrice({currencyPair: 'BTC-USD'}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('spot price', function () {

        context('success call', function () {
            it('retrieves current spot price of bitcoin or ether cb', function (done) {
                coinbase.spotPrice({currencyPair: 'BTC-USD'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.spotPrice.exampleResponse);
                    done();
                });
            });

            it('retrieves spot price using promise', function (done) {
                coinbase.spotPrice({currencyPair: 'BTC-USD'}).then(
                    success(apis.unauthenticated.spotPrice.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                coinbase.spotPrice({currencyPair: 'BTC-USD'}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                coinbase.spotPrice({currencyPair: 'BTC-USD'}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('time', function () {

        context('success call', function () {
            it('retrieves coinbase api server time', function (done) {
                coinbase.time(null, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.time.exampleResponse);
                    done();
                });
            });

            it('retrieves api server time using promise', function (done) {
                coinbase.time().then(
                    success(apis.unauthenticated.time.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                coinbase.time(null, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                coinbase.time().then(
                    success,
                    failure(done)
                );
            });
        });
    });


    //todo
    //describe('ticker', function () {
    //	it('returns ticker info on good resp', function(done) {
    //		xchange.kraken.ticker(function(error, resp){
    //			console.log("--here.. ", resp);
    //			if(!error){
    //				console.log(resp);
    //			}
    //			done();
    //		});
    //	});
    //
    //	it('returns error on bad response', function() {
    //
    //	});
    //
    //});

});
