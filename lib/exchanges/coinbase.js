/**
 * API docs - https://developers.coinbase.com/api/v2#data-endpoints
 *
 */
import { createEndpoints } from '../parsers';


/**
 * @module coinbase
 * @memberof xchange
 */
export const apis = {

    rootUrl: 'https://api.coinbase.com/v2',

    unauthenticated: {

        /**
         * List known currencies
         * @returns listing of currencies
         */
        currencies: {
            url: '/currencies',
            type: 'GET',
            exampleResponse: {
                "data": [
                    {
                        "id": "AED",
                        "name": "United Arab Emirates Dirham",
                        "min_size": "0.01000000"
                    },
                    {
                        "id": "AFN",
                        "name": "Afghan Afghani",
                        "min_size": "0.01000000"
                    }
                ]
            },
        },

        /**
         * @function exchangeRate
         * @memberof Coinbase
         */
        exchangeRates: {
            url: '/exchange-rates',
            type: 'GET',
            exampleResponse: {
                "data": {
                    "currency": "BTC",
                    "rates": {
                        "AED": "36.73",
                        "AFN": "589.50",
                    }
                }
            },
        },

        /**
         * Get the total price to buy one bitcoin or ether.
         * @param {Object} [data]
         * @param {string} [data.currencyPair] the currency for the exchange rate
         * @returns the buy price of a bitcoin or eth for the given currency
         */
        buyPrice: {
            url: '/prices/<%=currencyPair%>/buy',
            type: 'GET',
            //TODO: think of better way to convert these query strings
            //notates that the url has a form of /endpoint/<some-segment>
            segmented: ['currencyPair'],
            headers: {
                'CB-VERSION': '2016-08-10'
            },
            exampleResponse: {
                "data": {
                    "amount": "1020.25",
                    "currency": "USD"
                }
            },
        },

        /**
         * Get the total price to sell one bitcoin or ether.
         * @param {Object} [data]
         * @param {string} [data.currencyPair] the currency pair for the exchange rate
         * @returns the sell price of a bitcoin or eth for the given currency
         */
        sellPrice: {
            url: '/prices/<%=currencyPair%>/sell',
            type: 'GET',
            segmented: ['currencyPair'],
            headers: {
                'CB-VERSION': '2016-08-10'
            },
            exampleResponse: {
                "data": {
                    "amount": "1010.25",
                    "currency": "USD"
                }
            },
        },

        /**
         * Get the spot price of one bitcoin or ether.
         * @param {Object} [data]
         * @param {string} [data.currencyPair] the currency pair for the exchange rate
         * @param {string=} [data.date] optional utc date string in format YYYY-MM-DD for historic spot price
         * @returns the spot price of a bitcoin or eth for the given currency
         */
        spotPrice: {
            url: '/prices/<%=currencyPair%>/spot',
            type: 'GET',
            segmented: ['currencyPair'],
            headers: {
                'CB-VERSION': '2016-08-10'
            },
            exampleResponse: {
                "data": {
                    "amount": "1010.25",
                    "currency": "USD"
                }
            },
        },

        /**
         * Get the API server time
         * @returns servers time
         */
        time: {
            url: '/time',
            type: 'GET',
            exampleResponse: {
                "data": {
                    "iso": "2015-06-23T18:02:51Z",
                    "epoch": 1435082571
                }
            },
        },
    },
};

export default createEndpoints(apis);
