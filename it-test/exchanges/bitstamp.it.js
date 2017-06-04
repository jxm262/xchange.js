import chai from 'chai';
import sinon from 'sinon';
import xchange from '../../lib/xchange';

const should = chai.should();


describe('bitstamp apis', function () {

    describe('ticker', function () {
        it('completes successfully', function (done) {
            const params = {
                currencyPair: 'btcusd'
            }

            xchange.bitstamp.ticker(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('hourly ticker', function () {
        it('completes successfully', function (done) {
            const params = {
                currencyPair: 'btcusd'
            }

            xchange.bitstamp.hourlyTicker(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('order book', function () {
        it('completes successfully', function (done) {
            const params = {
                currencyPair: 'btcusd'
            }

            xchange.bitstamp.orderBook(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('transactions', function () {
        it('completes successfully', function (done) {
            const params = {
                currencyPair: 'btcusd',
                time: 'hour'
            }

            xchange.bitstamp.transactions(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

});
