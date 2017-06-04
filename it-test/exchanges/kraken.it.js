import chai from 'chai';
import sinon from 'sinon';
import xchange from '../../lib/xchange';

const should = chai.should();


describe('kraken apis', function () {

    describe('Server Time', function () {
        it('completes successfully', function (done) {
            xchange.kraken.serverTime(null, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Assets', function () {
        it('completes successfully', function (done) {
            const params = {
                info: 'info',
                aclass: 'currency',
                asset: ['DASH', 'USDT']
            }

            xchange.kraken.assets(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Asset Pairs', function () {
        it('completes successfully', function (done) {
            const params = {
                info: 'info',
                pair: ['USDTZUSD', 'DASHUSD']
            }

            xchange.kraken.assetPairs(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('OHLC', function () {
        it('completes successfully', function (done) {
            const params = {
                pair: 'USDTZUSD',
                interval: 5,
                since: 1491269700
            }

            xchange.kraken.ohlc(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Order Book', function () {
        it('completes successfully', function (done) {
            const params = {
                pair: 'USDTZUSD',
                count: 5
            }

            xchange.kraken.orderBook(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Recent Trades', function () {
        it('completes successfully', function (done) {
            const params = {
                pair: 'USDTZUSD',
                since: 1491269156362842889
            }

            xchange.kraken.recentTrades(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Recent Spread', function () {
        it('completes successfully', function (done) {
            const params = {
                pair: 'USDTZUSD',
                since: 1491269156362842889
            }

            xchange.kraken.recentSpread(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

});
