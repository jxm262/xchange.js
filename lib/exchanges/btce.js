/**
 * API docs - http://docs.bitfinex.com/v1/docs/public-endpoints
 *
 */
import { createEndpoints } from '../parsers';


export const apis = {

    rootUrl: 'https://btc-e.com/api/3',

    unauthenticated: {

        /**
         * This method provides all the information about currently active pairs, such as the maximum number of digits
         * after the decimal point, the minimum price, the maximum price, the minimum transaction size, whether the
         * pair is hidden, the commission for each pair.
         * @param {Object} [data]
         * @param {string} [data.currencyPair] the currency pair to retrieve data for
         * @returns active pair info
         */
        info: {
            url: '/info/<%=currencyPair%>',
            type: 'GET',
            segmented: ['currencyPair'],
            exampleResponse: {
                "server_time": 1493005594,
                "pairs": {
                    "btc_usd": {
                        "decimal_places": 3,
                        "min_price": 0.1,
                        "max_price": 10000,
                        "min_amount": 0.001,
                        "hidden": 0,
                        "fee": 0.2
                    },
                    "btc_rur": {
                        "decimal_places": 5,
                        "min_price": 1,
                        "max_price": 1000000,
                        "min_amount": 0.001,
                        "hidden": 0,
                        "fee": 0.2
                    },
                    "btc_eur": {
                        "decimal_places": 5,
                        "min_price": 0.1,
                        "max_price": 3200,
                        "min_amount": 0.001,
                        "hidden": 0,
                        "fee": 0.2
                    },
                }
            }
        },

        /**
         * This method provides all the information about currently active pairs, such as: the maximum price,
         * the minimum price, average price, trade volume, trade volume in currency, the last trade, Buy and Sell price.
         * All information is provided over the past 24 hours.
         * @param {Object} [data]
         * @param {string} [data.currencyPair] the currency pair to retrieve data for
         * @returns ticker data
         */
        ticker: {
            url: '/ticker/<%=currencyPair%>',
            type: 'GET',
            segmented: ['currencyPair'],
            exampleResponse: {
                "btc_usd": {
                    "high": 1241.987,
                    "low": 1215.5,
                    "avg": 1228.7435,
                    "vol": 5842305.3252,
                    "vol_cur": 4736.91428,
                    "last": 1235.22,
                    "buy": 1240,
                    "sell": 1235.221,
                    "updated": 1493005768
                }
            }
        },

        /**
         * This method provides the information about active orders on the pair.
         * @param {Object} [data]
         * @param {string} [data.currencyPair] the currency pair to retrieve data for
         * @param {string=} [data.limit] indicates how many orders should be displayed (150 by default). Must be less than 500
         * @returns ticker data
         */
        depth: {
            url: '/depth/<%=currencyPair%>',
            type: 'GET',
            segmented: ['currencyPair'],
            queryStrings: {
                limit: 'limit'
            },
            exampleResponse: {
                "btc_usd": {
                    "asks": [[1240.476, 1.0708589]],
                    "bids": [[1236.077, 1.09385775]]
                }
            }
        },

        /**
         * This method provides the information about the last trades.
         * @param {Object} [data]
         * @param {string} [data.currencyPair] the currency pair to retrieve data for
         * @param {string=} [data.limit] indicates how many orders should be displayed (150 by default). Must be less than 500
         * @returns ticker data
         */
        trades: {
            url: '/trades/<%=currencyPair%>',
            type: 'GET',
            segmented: ['currencyPair'],
            queryStrings: {
                limit: 'limit'
            },
            exampleResponse: {
                "btc_usd": {
                    "asks": [[1240.476, 1.0708589]],
                    "bids": [[1236.077, 1.09385775]]
                }
            }
        },

    },
};

export default createEndpoints(apis);
