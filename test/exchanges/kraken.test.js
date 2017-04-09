import nock from 'nock';
import chai from 'chai';
import sinon from 'sinon';
import kraken, { rootUrl, endpoints } from '../../lib/exchanges/kraken'
const should = chai.should();


const errMsg = {msg: "test-error"};

nock(rootUrl)
    .get(endpoints.unauthenticated.serverTime.url)
    .twice()
    .reply(200, endpoints.unauthenticated.serverTime.exampleResponse);

nock(rootUrl)
    .get(endpoints.unauthenticated.serverTime.url)
    .twice()
    .replyWithError(errMsg);

nock(rootUrl)
    .get(endpoints.unauthenticated.assets.url)
    .twice()
    .reply(200, endpoints.unauthenticated.assets.exampleResponse);

nock(rootUrl)
    .get(endpoints.unauthenticated.assets.url)
    .twice()
    .replyWithError(errMsg);

nock(rootUrl)
    .get(endpoints.unauthenticated.assetPairs.url)
    .twice()
    .reply(200, endpoints.unauthenticated.assetPairs.exampleResponse);

nock(rootUrl)
    .get(endpoints.unauthenticated.assetPairs.url)
    .twice()
    .replyWithError(errMsg);

nock(rootUrl)
    .post(endpoints.unauthenticated.ohlc.url, {
        "pair": "USDTZUSD"
    })
    .twice()
    .reply(200, endpoints.unauthenticated.ohlc.exampleResponse);

nock(rootUrl)
    .post(endpoints.unauthenticated.ohlc.url)
    .twice()
    .replyWithError(errMsg);

nock(rootUrl)
    .post(endpoints.unauthenticated.orderBook.url, {
        "pair": "USDTZUSD"
    })
    .twice()
    .reply(200, endpoints.unauthenticated.orderBook.exampleResponse);

nock(rootUrl)
    .post(endpoints.unauthenticated.orderBook.url)
    .twice()
    .replyWithError(errMsg);

nock(rootUrl)
    .post(endpoints.unauthenticated.recentTrades.url, {
        "pair": "USDTZUSD"
    })
    .twice()
    .reply(200, endpoints.unauthenticated.recentTrades.exampleResponse);

nock(rootUrl)
    .post(endpoints.unauthenticated.recentTrades.url)
    .twice()
    .replyWithError(errMsg);

nock(rootUrl)
    .post(endpoints.unauthenticated.recentSpread.url, {
        "pair": "USDTZUSD"
    })
    .twice()
    .reply(200, endpoints.unauthenticated.recentSpread.exampleResponse);

nock(rootUrl)
    .post(endpoints.unauthenticated.recentSpread.url)
    .twice()
    .replyWithError(errMsg);


function success(expected, done) {
    return function (resp) {
        resp.should.deep.equal(expected);
        done();
    }
}

function failure(done) {
    return function (err) {
        err.should.deep.equal(errMsg);
        done();
    }
}


describe('kraken', function () {

    describe('serverTime', function () {

        context('success call', function () {
            it('retrieves server time using cb', function (done) {
                kraken.serverTime(null, function (err, resp) {
                    resp.should.deep.equal(endpoints.unauthenticated.serverTime.exampleResponse);
                    done();
                });
            });

            it('retrieves server time using promise', function (done) {
                kraken.serverTime().then(
                    success(endpoints.unauthenticated.serverTime.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                kraken.serverTime(null, function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                kraken.serverTime().then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('assets', function () {

        context('success call', function () {
            it('retrieves asset info using cb', function (done) {
                kraken.assets(null, function (err, resp) {
                    resp.should.deep.equal(endpoints.unauthenticated.assets.exampleResponse);
                    done();
                });
            });

            it('retrieves asset info using using promise', function (done) {
                kraken.assets(null).then(
                    success(endpoints.unauthenticated.assets.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                kraken.assets(null, function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                kraken.assets().then(
                    success,
                    failure(done)
                );
            });
        });

    });

    describe('asset pairs', function () {

        context('success call', function () {
            it('retrieves asset pairs using cb', function (done) {
                kraken.assetPairs(null, function (err, resp) {
                    resp.should.deep.equal(endpoints.unauthenticated.assetPairs.exampleResponse);
                    done();
                });
            });

            it('retrieves asset pairs using using promise', function (done) {
                kraken.assetPairs().then(
                    success(endpoints.unauthenticated.assetPairs.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                kraken.assetPairs(null, function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                kraken.assetPairs().then(
                    success,
                    failure(done)
                );
            });
        });

    });

    describe('ohlc', function () {

        const data = { "pair": "USDTZUSD" };

        context('success call', function () {
            it('retrieves array of pair name and ohlc using cb', function (done) {

                kraken.ohlc(data, function (err, resp) {
                    resp.should.deep.equal(endpoints.unauthenticated.ohlc.exampleResponse);
                    done();
                });
            });

            it('retrieves array of pair name and ohlc using using promise', function (done) {
                kraken.ohlc(data).then(
                    success(endpoints.unauthenticated.ohlc.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                kraken.ohlc(null, function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                kraken.ohlc().then(
                    success,
                    failure(done)
                );
            });
        });

    });

    describe('orderBook', function () {

        const data = { "pair": "USDTZUSD" };

        context('success call', function () {
            it('retrieves array of pair name and market depth using cb', function (done) {

                kraken.orderBook(data, function (err, resp) {
                    resp.should.deep.equal(endpoints.unauthenticated.orderBook.exampleResponse);
                    done();
                });
            });

            it('retrieves array of pair name and market depth using promise', function (done) {
                kraken.orderBook(data).then(
                    success(endpoints.unauthenticated.orderBook.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                kraken.orderBook(null, function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                kraken.orderBook().then(
                    success,
                    failure(done)
                );
            });
        });

    });

    describe('recentTrades', function () {

        const data = { "pair": "USDTZUSD" };

        context('success call', function () {
            it('retrieves array of pair name and recent trade data using cb', function (done) {

                kraken.recentTrades(data, function (err, resp) {
                    resp.should.deep.equal(endpoints.unauthenticated.recentTrades.exampleResponse);
                    done();
                });
            });

            it('retrieves array of pair name and recent trade data using promise', function (done) {
                kraken.recentTrades(data).then(
                    success(endpoints.unauthenticated.recentTrades.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                kraken.recentTrades(null, function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                kraken.recentTrades().then(
                    success,
                    failure(done)
                );
            });
        });

    });

    describe('recentSpread', function () {

        const data = { "pair": "USDTZUSD" };

        context('success call', function () {
            it('retrieves array of pair name and recent spread data using cb', function (done) {

                kraken.recentSpread(data, function (err, resp) {
                    resp.should.deep.equal(endpoints.unauthenticated.recentSpread.exampleResponse);
                    done();
                });
            });

            it('retrieves array of pair name and recent spread data using promise', function (done) {
                kraken.recentSpread(data).then(
                    success(endpoints.unauthenticated.recentSpread.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                kraken.recentSpread(null, function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                kraken.recentSpread().then(
                    success,
                    failure(done)
                );
            });
        });

    });

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
    //		//todo
    //	});
    //
    //});

});
