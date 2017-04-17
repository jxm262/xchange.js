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

});
