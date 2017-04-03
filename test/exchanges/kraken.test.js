import nock from 'nock';
import chai from 'chai';
import sinon from 'sinon';
import request from 'supertest';
import krakenModule from '../../lib/exchanges/kraken'
import config from '../../lib/config'
const should = chai.should();


const serverTimeResp = {
    "error": [],
    "result": {
        "unixtime": 1491077507,
        "rfc1123": "Sat,  1 Apr 17 20:11:47 +0000"
    }
};

const errMsg = {msg: "test-error"};


const kraken = krakenModule(config);

nock('https://api.kraken.com')
    .get('/0/public/Time')
    .reply(200, serverTimeResp);

nock('https://api.kraken.com')
    .get('/0/public/Time')
    .replyWithError(errMsg);


function success(expected, done) {
    return function (resp) {
        resp.body.should.deep.equal(expected);
        done();
    }
}

function failure(done) {
    return function (err) {
        err.should.deep.equal(errMsg);
        done();
    }
}


describe.only('kraken', function () {

    describe('serverTime', function () {

        context('using callback', function () {
            it('retrieves server time on success', function (done) {
                kraken.serverTime(function (err, resp) {
                    resp.body.should.deep.equal(serverTimeResp);
                    done();
                });
            });

            it('returns back error on failure', function (done) {
                kraken.serverTime(function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });
        });

        context('using promises', function () {
            it('retrieves server time on success', function (done) {
                kraken.serverTime().then(
                    success(serverTimeResp, done),
                    failure
                );

            });

            it('returns back error on failure', function (done) {
                kraken.serverTime().then(
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
