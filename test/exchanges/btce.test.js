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

});
