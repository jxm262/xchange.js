/**
 * API docs - http://docs.bitfinex.com/v1/docs/public-endpoints
 *
 */
import { createEndpoints } from '../parsers';


export const apis = {

    rootUrl: 'https://api.bitfinex.com/v1',

    unauthenticated: {

        /**
         * @swagger
         * /login:
         *   post:
         *     description: Login to the application
         *     produces:
         *       - application/json
         *     parameters:
         *       - name: username
         *         description: Username to use for login.
         *         in: formData
         *         required: true
         *         type: string
         *       - name: password
         *         description: User's password.
         *         in: formData
         *         required: true
         *         type: string
         *     responses:
         *       200:
         *         description: login
         */
        ticker: {
            url: '/pubticker/<%=symbol%>',
            type: 'GET',
            segmented: ['symbol'],
            exampleResponse: {
                "mid": "244.755",
                "bid": "244.75",
                "ask": "244.76",
                "last_price": "244.82",
                "low": "244.2",
                "high": "248.19",
                "volume": "7842.11542563",
                "timestamp": "1444253422.348340958"
            }
        },

        /**
         * Get statistics about symbol
         * @param {Object} [data]
         * @param {string} [data.symbol] the currency symbol to retrieve data for
         * @param {number=} [data.period] period in days
         * @param {number=} [data.volume] volume in price format
         * @returns statistics data
         */
        stats: {
            url: '/stats/<%=symbol%>',
            type: 'GET',
            segmented: ['symbol'],
            exampleResponse: [{
                "period": 1,
                "volume": "7967.96766158"
            }, {
                "period": 7,
                "volume": "55938.67260266"
            }, {
                "period": 30,
                "volume": "275148.09653645"
            }]
        },

        /**
         * Get the full margin funding book
         * @param {Object} [data]
         * @param {string} [data.currency] the currency to retrieve data for
         * @param {number=} [data.limitBids = 50] limit the number of bids
         * @param {number=} [data.limitAsks = 50] limit the number of asks
         * @returns full margin funding book
         */
        fundingBook: {
            url: '/lendbook/<%=currency%>',
            type: 'GET',
            queryStrings: {
                limitBids: 'limit_bids',
                limitAsks: 'limit_asks',
            },
            segmented: ['currency'],
            exampleResponse: {
                "bids": [{
                    "rate": "9.1287",
                    "amount": "5000.0",
                    "period": 30,
                    "timestamp": "1444257541.0",
                    "frr": "No"
                }],
                "asks": [{
                    "rate": "8.3695",
                    "amount": "407.5",
                    "period": 2,
                    "timestamp": "1444260343.0",
                    "frr": "No"
                }]
            }
        },

        /**
         * Get the full order book
         * @param {Object} [data]
         * @param {string} [data.symbol] the currency symbol to retrieve data for
         * @param {number=} [data.limitBids = 50] limit the number of bids
         * @param {number=} [data.limitAsks = 50] limit the number of asks
         * @param {number=} [data.group = 1] If 1, orders are grouped by price in the orderbook. If 0, orders are not grouped and sorted individually
         * @returns full order book data
         */
        orderBook: {
            url: '/book/<%=symbol%>',
            type: 'GET',
            queryStrings: {
                limitBids: 'limit_bids',
                limitAsks: 'limit_asks',
                group: 'group'
            },
            segmented: ['symbol'],
            exampleResponse: {
                "bids": [{
                    "price": "574.61",
                    "amount": "0.1439327",
                    "timestamp": "1472506127.0"
                }],
                "asks": [{
                    "price": "574.62",
                    "amount": "19.1334",
                    "timestamp": "1472506126.0"
                }]
            }
        },

        /**
         * List most recent trades
         * @param {Object} [data]
         * @param {string} [data.symbol] the currency symbol to retrieve data for
         * @param {number=} [data.timestamp] Only show trades at or after this timestamp
         * @param {number=} [data.limitTrades = 50] Limit the number of trades returned. Must be >= 1
         * @returns Most recent trades for given currency symbol
         */
        trades: {
            url: '/trades/<%=symbol%>',
            type: 'GET',
            queryStrings: {
                timestamp: 'timestamp',
                limitTrades: 'limit_trades',
            },
            segmented: ['symbol'],
            exampleResponse: [{
                "timestamp": 1444266681,
                "tid": 11988919,
                "price": "244.8",
                "amount": "0.03297384",
                "exchange": "bitfinex",
                "type": "sell"
            }]
        },

        /**
         * Get a list of the most recent funding data for the given currency: total amount provided and Flash Return Rate (in % by 365 days) over time.
         * @param {Object} [data]
         * @param {string} [data.currency] the currency to retrieve data for
         * @param {number=} [data.timestamp] Only show trades at or after this timestamp
         * @param {number=} [data.limitLends = 50] Limit the amount of funding data returned. Must be >= 1
         * @returns Most recent funding data for given currency
         */
        lends: {
            url: '/lends/<%=currency%>',
            type: 'GET',
            queryStrings: {
                timestamp: 'timestamp',
                limitLends: 'limit_lends',
            },
            segmented: ['currency'],
            exampleResponse: [{
                "rate": "9.8998",
                "amount_lent": "22528933.77950878",
                "amount_used": "0.0",
                "timestamp": 1444264307
            }]
        },

        /**
         * Get a list of available symbol names
         */
        symbols: {
            url: '/symbols',
            type: 'GET',
            exampleResponse: [
                "btcusd",
                "ltcusd",
                "ltcbtc",
            ]
        },

        /**
         * Get a list of symbol ID's and pair details
         */
        symbolsDetails: {
            url: '/symbols_details',
            type: 'GET',
            exampleResponse: [{
                "pair": "btcusd",
                "price_precision": 5,
                "initial_margin": "30.0",
                "minimum_margin": "15.0",
                "maximum_order_size": "2000.0",
                "minimum_order_size": "0.01",
                "expiration": "NA"
            }, {
                "pair": "ltcusd",
                "price_precision": 5,
                "initial_margin": "30.0",
                "minimum_margin": "15.0",
                "maximum_order_size": "5000.0",
                "minimum_order_size": "0.1",
                "expiration": "NA"
            }, {
                "pair": "ltcbtc",
                "price_precision": 5,
                "initial_margin": "30.0",
                "minimum_margin": "15.0",
                "maximum_order_size": "5000.0",
                "minimum_order_size": "0.1",
                "expiration": "NA"
            }]
        },

    },
};

export default createEndpoints(apis);
