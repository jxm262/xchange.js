import chai from 'chai';
import sinon from 'sinon';
import xchange from '../../lib/xchange';

const should = chai.should();


describe('btc-e apis', function () {

    describe('info', function () {
        it('completes successfully', function (done) {
            const params = {
              currencyPair: 'btc_usd'
            }

            xchange.btce.info(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('ticker', function () {
        it('completes successfully', function (done) {
            const params = {
              currencyPair: 'btc_usd'
            }

            xchange.btce.ticker(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('depth', function () {
        it('completes successfully', function (done) {
            const params = {
                currencyPair: 'btc_usd',
                limit: 5
            }

            xchange.btce.depth(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

    describe('trades', function () {
        it('completes successfully', function (done) {
            const params = {
                currencyPair: 'btc_usd',
                limit: 5
            }

            xchange.btce.trades(params, (err, response) => {
                if (!err) {
                    console.log(response);
                    should.exist(response);
                    done()
                }
            });
        });
    });

});
