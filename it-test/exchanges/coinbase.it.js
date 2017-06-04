import chai from 'chai';
import sinon from 'sinon';
import xchange from '../../lib/xchange';

const should = chai.should();


describe('coinbase apis', function () {

    describe('currencies', function () {
        it('completes successfully', function (done) {
            xchange.coinbase.currencies(null, (err, response) => {
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
            xchange.coinbase.exchangeRates(null, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Buy Price', function () {
        it('completes successfully', function (done) {
            const params = {
                currencyPair: 'BTC-USD'
            }

            xchange.coinbase.buyPrice(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Sell Price', function () {
        it('completes successfully', function (done) {
            const params = {
                currencyPair: 'BTC-USD'
            }

            xchange.coinbase.sellPrice(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Spot Price', function () {
        it('completes successfully', function (done) {
            const params = {
                currencyPair: 'BTC-USD'
            }

            xchange.coinbase.spotPrice(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('Time', function () {
        it('completes successfully', function (done) {
            xchange.coinbase.time(null, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

});
