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



describe('kraken', function () {

    describe.only('currencies', function () {

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
