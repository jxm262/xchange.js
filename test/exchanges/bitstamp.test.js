import nock from 'nock';
import chai from 'chai';
import sinon from 'sinon';
import bitstamp, { apis } from '../../lib/exchanges/bitstamp'
import { success, failure, testErrMsg } from './testUtils'

const should = chai.should();

const rootUrl = apis.rootUrl;

nock(rootUrl)
    .get('/ticker/btcusd')
    .twice()
    .reply(200, apis.unauthenticated.ticker.exampleResponse);

nock(rootUrl)
    .get('/ticker/btcusd')
    .twice()
    .replyWithError(testErrMsg);

nock(rootUrl)
    .get('/ticker_hour/btcusd')
    .twice()
    .reply(200, apis.unauthenticated.hourlyTicker.exampleResponse);

nock(rootUrl)
    .get('/ticker_hour/btcusd')
    .twice()
    .replyWithError(testErrMsg);

nock(rootUrl)
    .get('/order_book/btcusd')
    .twice()
    .reply(200, apis.unauthenticated.orderBook.exampleResponse);

nock(rootUrl)
    .get('/order_book/btcusd')
    .twice()
    .replyWithError(testErrMsg);


describe.only('bitstamp', function () {

    describe('ticker', function () {

        context('success call', function () {
            it('retrieves ticker data using cb', function (done) {
                bitstamp.ticker({currencyPair: 'btcusd'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.ticker.exampleResponse);
                    done();
                });
            });

            it('retrieves ticker using promise', function (done) {
                bitstamp.ticker({currencyPair: 'btcusd'}).then(
                    success(apis.unauthenticated.ticker.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                bitstamp.ticker({currencyPair: 'btcusd'}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                bitstamp.ticker({currencyPair: 'btcusd'}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('hourly ticker', function () {

        context('success call', function () {
            it('retrieves hourly ticker data using cb', function (done) {
                bitstamp.hourlyTicker({currencyPair: 'btcusd'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.hourlyTicker.exampleResponse);
                    done();
                });
            });

            it('retrieves hourly ticker using promise', function (done) {
                bitstamp.hourlyTicker({currencyPair: 'btcusd'}).then(
                    success(apis.unauthenticated.hourlyTicker.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                bitstamp.hourlyTicker({currencyPair: 'btcusd'}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                bitstamp.hourlyTicker({currencyPair: 'btcusd'}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

    describe('order book', function () {

        context('success call', function () {
            it('retrieves order book data using cb', function (done) {
                bitstamp.orderBook({currencyPair: 'btcusd'}, function (err, resp) {
                    resp.should.deep.equal(apis.unauthenticated.orderBook.exampleResponse);
                    done();
                });
            });

            it('retrieves order book using promise', function (done) {
                bitstamp.orderBook({currencyPair: 'btcusd'}).then(
                    success(apis.unauthenticated.orderBook.exampleResponse, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                bitstamp.orderBook({currencyPair: 'btcusd'}, function (err, resp) {
                    err.should.deep.equal(testErrMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                bitstamp.orderBook({currencyPair: 'btcusd'}).then(
                    success,
                    failure(done)
                );
            });
        });
    });

});
