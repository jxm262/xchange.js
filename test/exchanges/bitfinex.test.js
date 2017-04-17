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

});
