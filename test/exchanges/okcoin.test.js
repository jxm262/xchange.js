import nock from 'nock';
import chai from 'chai';
import sinon from 'sinon';
import okcoin, { apis } from '../../lib/exchanges/okcoin'
import { success, failure, testErrMsg } from './testUtils'

const rootUrl = apis.rootUrl;

nock(rootUrl)
    .get('/ticker.do?symbol=ltc_usd')
    .twice()
    .reply(200, apis.unauthenticated.ticker.exampleResponse);

nock(rootUrl)
    .get('/ticker.do')
    .twice()
    .replyWithError(testErrMsg);


describe.only('okcoin', function () {

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

        //context('failure call', function () {
        //    it('retrieves error using cb', function (done) {
        //        okcoin.ticker({currencyPair: 'btcusd'}, function (err, resp) {
        //            err.should.deep.equal(testErrMsg)
        //            done();
        //        });
        //    });
        //
        //    it('retrieves error using promise', function (done) {
        //        okcoin.ticker({currencyPair: 'btcusd'}).then(
        //            success,
        //            failure(done)
        //        );
        //    });
        //});
    });


});
