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


});
