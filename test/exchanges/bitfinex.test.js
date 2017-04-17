import nock from 'nock';
import chai from 'chai';
import sinon from 'sinon';
import bitfinex, { apis } from '../../lib/exchanges/bitfinex'
import { success, failure, testErrMsg } from './testUtils'

const should = chai.should();

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



describe('bitfinex', function () {

    describe('ticker', function () {

        context('success call', function () {
            it('retrieves ticker data using cb', function (done) {
                bitfinex.ticker({symbol: 'BTCUSD'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.ticker.exampleResponse);
                    done();
                });
            });

            it('retrieves ticker using promise', function (done) {
                bitfinex.ticker({symbol: 'BTCUSD'}).then(
                    success(apis.unauthenticated.ticker.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                bitfinex.ticker({symbol: 'BTCUSD'}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                bitfinex.ticker({symbol: 'BTCUSD'}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('stats', function () {

        context('success call', function () {
            it('retrieves stats data using cb', function (done) {
                bitfinex.stats({symbol: 'BTCUSD'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.stats.exampleResponse);
                    done();
                });
            });

            it('retrieves stats using promise', function (done) {
                bitfinex.stats({symbol: 'BTCUSD'}).then(
                    success(apis.unauthenticated.stats.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                bitfinex.stats({symbol: 'BTCUSD'}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                bitfinex.stats({symbol: 'BTCUSD'}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('funding book', function () {

        context('success call', function () {
            it('retrieves stats data using cb', function (done) {
                bitfinex.fundingBook({currency: 'USD'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.fundingBook.exampleResponse);
                    done();
                });
            });

            it('retrieves stats using promise', function (done) {
                bitfinex.fundingBook({currency: 'USD'}).then(
                    success(apis.unauthenticated.fundingBook.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                bitfinex.fundingBook({currency: 'USD'}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                bitfinex.fundingBook({currency: 'USD'}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('order book', function () {

        context('success call', function () {
            it('retrieves full order book data using cb', function (done) {
                bitfinex.orderBook({symbol: 'BTCUSD'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.orderBook.exampleResponse);
                    done();
                });
            });

            it('retrieves order book using promise', function (done) {
                bitfinex.orderBook({symbol: 'BTCUSD'}).then(
                    success(apis.unauthenticated.orderBook.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                bitfinex.orderBook({symbol: 'BTCUSD'}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                bitfinex.orderBook({symbol: 'BTCUSD'}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('trades', function () {

        context('success call', function () {
            it('retrieves recent trades data using cb', function (done) {
                bitfinex.trades({symbol: 'BTCUSD'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.trades.exampleResponse);
                    done();
                });
            });

            it('retrieves recent trades using promise', function (done) {
                bitfinex.trades({symbol: 'BTCUSD'}).then(
                    success(apis.unauthenticated.trades.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                bitfinex.trades({symbol: 'BTCUSD'}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                bitfinex.trades({symbol: 'BTCUSD'}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('lends', function () {

        context('success call', function () {
            it('retrieves recent funding data using cb', function (done) {
                bitfinex.lends({currency: 'USD'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.lends.exampleResponse);
                    done();
                });
            });

            it('retrieves recent funding data using promise', function (done) {
                bitfinex.lends({currency: 'USD'}).then(
                    success(apis.unauthenticated.lends.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                bitfinex.lends({currency: 'USD'}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                bitfinex.lends({currency: 'USD'}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

});
