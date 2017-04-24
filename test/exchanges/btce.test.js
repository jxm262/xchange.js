import nock from 'nock';
import chai from 'chai';
import sinon from 'sinon';
import btce, { apis } from '../../lib/exchanges/btce'
import { success, failure, testErrMsg } from './testUtils'

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


describe('btce', function () {

    describe('info', function () {

        context('success call', function () {
            it('retrieves info data on currency pair using cb', function (done) {
                btce.info({currencyPair: 'btc_usd'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.info.exampleResponse);
                    done();
                });
            });

            it('retrieves info data using promise', function (done) {
                btce.info({currencyPair: 'btc_usd'}).then(
                    success(apis.unauthenticated.info.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                btce.info({currencyPair: 'btc_usd'}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                btce.info({currencyPair: 'btc_usd'}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('ticker', function () {

        context('success call', function () {
            it('retrieves ticker data on currency pair using cb', function (done) {
                btce.ticker({currencyPair: 'btc_usd'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.ticker.exampleResponse);
                    done();
                });
            });

            it('retrieves ticker data using promise', function (done) {
                btce.ticker({currencyPair: 'btc_usd'}).then(
                    success(apis.unauthenticated.ticker.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                btce.ticker({currencyPair: 'btc_usd'}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                btce.ticker({currencyPair: 'btc_usd'}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('depth', function () {

        context('success call', function () {
            it('retrieves depth data using cb', function (done) {
                btce.depth({currencyPair: 'btc_usd', limit: 1}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.depth.exampleResponse);
                    done();
                });
            });

            it('retrieves depth data using promise', function (done) {
                btce.depth({currencyPair: 'btc_usd', limit: 1}).then(
                    success(apis.unauthenticated.depth.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                btce.depth({currencyPair: 'btc_usd', limit: 1}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                btce.depth({currencyPair: 'btc_usd', limit: 1}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('trades', function () {

        context('success call', function () {
            it('retrieves trades data using cb', function (done) {
                btce.trades({currencyPair: 'btc_usd', limit: 1}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.trades.exampleResponse);
                    done();
                });
            });

            it('retrieves trades data using promise', function (done) {
                btce.trades({currencyPair: 'btc_usd', limit: 1}).then(
                    success(apis.unauthenticated.trades.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                btce.trades({currencyPair: 'btc_usd', limit: 1}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                btce.trades({currencyPair: 'btc_usd', limit: 1}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

});
