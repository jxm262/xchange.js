import chai from 'chai';
import sinon from 'sinon';
import xchange from '../../lib/xchange';

const should = chai.should();


describe('OkCoin apis', function () {

    describe('Ticker', function () {
        it('completes successfully', function (done) {
            const params = {
                symbol: 'ltc_usd'
            }

            xchange.okcoin.ticker(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Depth', function () {
        it('completes successfully', function (done) {
            const params = {
                symbol: 'ltc_usd',
                size: 3,
                merge: 1

            }

            xchange.okcoin.depth(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Trades', function () {
        it('completes successfully', function (done) {
            const params = {
                symbol: 'ltc_usd',
                since: 49161630
            }

            xchange.okcoin.trades(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Kline', function () {
        it('completes successfully', function (done) {
            const params = {
                symbol: 'ltc_usd',
                type: '30min',
                size: 3,
                since: 1417536000000
            }

            xchange.okcoin.kline(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Futures Ticker', function () {
        it('completes successfully', function (done) {
            const params = {
                symbol: 'ltc_usd',
                contractType: 'this_week'
            }

            xchange.okcoin.futureTicker(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Futures Depth', function () {
        it('completes successfully', function (done) {
            const params = {
                symbol: 'ltc_usd',
                contractType: 'this_week',
                size: 1,
                merge: 1
            }

            xchange.okcoin.futureTicker(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Futures Trades', function () {
        it('completes successfully', function (done) {
            const params = {
                symbol: 'ltc_usd',
                contractType: 'this_week'
            }

            xchange.okcoin.futureTrades(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Futures Index', function () {
        it('completes successfully', function (done) {
            const params = {
                symbol: 'ltc_usd'
            }

            xchange.okcoin.futureIndex(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Exchange Rate', function () {
        it('completes successfully', function (done) {
            xchange.okcoin.exchangeRate(null, (err, response) => {
                if (err) {
                    console.log('---err... ', err);
                }
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Futures Estimated Price', function () {
        it('completes successfully', function (done) {
            xchange.okcoin.futureEstimatedPrice(null, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Futures Kline', function () {
        it('completes successfully', function (done) {
            const params = {
                symbol: 'ltc_usd',
                type: '30min',
                contractType: 'this_week',
                size: 3,
                since: 1417536000000
            }

            xchange.okcoin.futureKline(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Futures Hold Amount', function () {
        it('completes successfully', function (done) {
            const params = {
                symbol: 'ltc_usd',
                contractType: 'this_week'
            }

            xchange.okcoin.futureHoldAmount(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Futures Hold Amount', function () {
        it('completes successfully', function (done) {
            const params = {
                symbol: 'ltc_usd',
                contractType: 'this_week'
            }

            xchange.okcoin.futureHoldAmount(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Futures Price Limit', function () {
        it('completes successfully', function (done) {
            const params = {
                symbol: 'ltc_usd',
                contractType: 'this_week'
            }

            xchange.okcoin.futurePriceLimit(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

});
