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

const assetsResp = {
    "error": [],
    "result": {
        "KFEE": {
            "aclass": "currency",
            "altname": "FEE",
            "decimals": 2,
            "display_decimals": 2
        },
        "USDT": {
            "aclass": "currency",
            "altname": "USDT",
            "decimals": 8,
            "display_decimals": 4
        },
        "XDAO": {
            "aclass": "currency",
            "altname": "DAO",
            "decimals": 10,
            "display_decimals": 3
        },
        "XETC": {
            "aclass": "currency",
            "altname": "ETC",
            "decimals": 10,
            "display_decimals": 5
        },
        "XETH": {
            "aclass": "currency",
            "altname": "ETH",
            "decimals": 10,
            "display_decimals": 5
        },
        "XICN": {
            "aclass": "currency",
            "altname": "ICN",
            "decimals": 10,
            "display_decimals": 5
        },
        "XLTC": {
            "aclass": "currency",
            "altname": "LTC",
            "decimals": 10,
            "display_decimals": 5
        },
        "XMLN": {
            "aclass": "currency",
            "altname": "MLN",
            "decimals": 10,
            "display_decimals": 5
        },
        "XNMC": {
            "aclass": "currency",
            "altname": "NMC",
            "decimals": 10,
            "display_decimals": 5
        },
        "XREP": {
            "aclass": "currency",
            "altname": "REP",
            "decimals": 10,
            "display_decimals": 5
        },
        "XXBT": {
            "aclass": "currency",
            "altname": "XBT",
            "decimals": 10,
            "display_decimals": 5
        },
        "XXDG": {
            "aclass": "currency",
            "altname": "XDG",
            "decimals": 8,
            "display_decimals": 2
        },
        "XXLM": {
            "aclass": "currency",
            "altname": "XLM",
            "decimals": 8,
            "display_decimals": 5
        },
        "XXMR": {
            "aclass": "currency",
            "altname": "XMR",
            "decimals": 10,
            "display_decimals": 5
        },
        "XXRP": {
            "aclass": "currency",
            "altname": "XRP",
            "decimals": 8,
            "display_decimals": 5
        },
        "XXVN": {
            "aclass": "currency",
            "altname": "XVN",
            "decimals": 4,
            "display_decimals": 2
        },
        "XZEC": {
            "aclass": "currency",
            "altname": "ZEC",
            "decimals": 10,
            "display_decimals": 5
        },
        "ZCAD": {
            "aclass": "currency",
            "altname": "CAD",
            "decimals": 4,
            "display_decimals": 2
        },
        "ZEUR": {
            "aclass": "currency",
            "altname": "EUR",
            "decimals": 4,
            "display_decimals": 2
        },
        "ZGBP": {
            "aclass": "currency",
            "altname": "GBP",
            "decimals": 4,
            "display_decimals": 2
        },
        "ZJPY": {
            "aclass": "currency",
            "altname": "JPY",
            "decimals": 2,
            "display_decimals": 0
        },
        "ZKRW": {
            "aclass": "currency",
            "altname": "KRW",
            "decimals": 2,
            "display_decimals": 0
        },
        "ZUSD": {
            "aclass": "currency",
            "altname": "USD",
            "decimals": 4,
            "display_decimals": 2
        }
    }
};

const errMsg = {msg: "test-error"};


const kraken = krakenModule(config);

nock('https://api.kraken.com')
    .get('/0/public/Time')
    .twice()
    .reply(200, serverTimeResp);

nock('https://api.kraken.com')
    .get('/0/public/Time')
    .twice()
    .replyWithError(errMsg);

nock('https://api.kraken.com')
    .get('/0/public/Assets')
    .twice()
    .reply(200, assetsResp);

nock('https://api.kraken.com')
    .get('/0/public/Assets')
    .twice()
    .replyWithError(errMsg);


function success(expected, done) {
    return function (resp) {
        resp.should.deep.equal(expected);
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

        context('success call', function () {
            it('retrieves server time using cb', function (done) {
                kraken.serverTime(function (err, resp) {
                    resp.should.deep.equal(serverTimeResp);
                    done();
                });
            });

            it('retrieves server time using promise', function (done) {
                kraken.serverTime().then(
                    success(serverTimeResp, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                kraken.serverTime(function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                kraken.serverTime().then(
                    success,
                    failure(done)
                );
            });
        });

    });

    describe('assets', function () {

        context('success call', function () {
            it('retrieves asset info using cb', function (done) {
                kraken.assets(function (err, resp) {
                    resp.should.deep.equal(assetsResp);
                    done();
                });
            });

            it('retrieves asset info using using promise', function (done) {
                kraken.assets().then(
                    success(assetsResp, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                kraken.assets(function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                kraken.assets().then(
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
