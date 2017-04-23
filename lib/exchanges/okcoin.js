/**
 * API docs - https://www.okcoin.com/about/rest_api.do
 *
 */
import { createEndpoints } from '../parsers';


export const apis = {

    rootUrl: 'https://www.okcoin.com/api/v1',

    unauthenticated: {

        /**
         * Get Ticker price
         * @param {Object=} [data]
         * @param {string=}  [data.symbol] the currency pair to retrieve data for.  Either btc_usd or ltc_usd
         * @returns ticker data
         */
        ticker: {
            url: '/ticker.do',
            type: 'GET',
            queryStrings: {
                symbol: 'symbol',
            },
            exampleResponse: {
                "date": "1492737709",
                "ticker": {
                    "buy": "11.042",
                    "high": "11.72",
                    "last": "11.042",
                    "low": "10.45",
                    "sell": "11.12",
                    "vol": "82575.557"
                }
            }
        },

        /**
         * Get Bid/Ask depth
         * @param {Object=} [data]
         * @param {string=} [data.symbol] the currency pair to retrieve data for.  Either btc_usd or ltc_usd
         * @param {number=} [data.size] must be between 1 - 200
         * @param {number=} [data.merge] merge depth, must be 1 to 0.1
         * @returns market bid/ask depth
         */
        depth: {
            url: '/depth.do',
            type: 'GET',
            queryStrings: {
                symbol: 'symbol',
                size: 'size',
                merge: 'merge',
            },
            exampleResponse: {
                "asks": [[14.6, 14.978]],
                "bids": [[14.59, 8]]
            }
        },

        /**
         * Get recent trades
         * @param {Object=} [data]
         * @param {string=} [data.symbol] the currency pair to retrieve data for.  Either btc_usd or ltc_usd
         * @param {number=} [data.since] get recently 600 pieces of data starting from the given tid (optional)
         * @returns recent trades data
         */
        trades: {
            url: '/trades.do',
            type: 'GET',
            queryStrings: {
                symbol: 'symbol',
                since: 'since',
            },
            exampleResponse: [
                {
                    "amount": "12.189",
                    "date": 1492985403,
                    "date_ms": 1492985403000,
                    "price": "14.551",
                    "tid": 49161634,
                    "type": "sell"
                },
                {
                    "amount": "10.943",
                    "date": 1492985405,
                    "date_ms": 1492985405000,
                    "price": "14.552",
                    "tid": 49161637,
                    "type": "sell"
                }
            ]
        },

        /**
         * Get kline
         * @param {Object=} [data]
         * @param {string=} [data.symbol] the currency pair to retrieve data for.  Either btc_usd or ltc_usd
         * @param {string=} [data.type] the type (one of the below)
         *                      1min : 1 minute candlestick data
         *                      3min : 3 minutes candlestick data
         *                      5min : 5 minutes candlestick data
         *                      15min : 15 minutes candlestick data
         *                      30min : 30 minutes candlestick data
         *                      1day : 1 day candlestick data
         *                      3day : 3 days candlestick data
         *                      1week : 1 week candlestick data
         *                      1hour : 1 hour candlestick data
         *                      2hour : 2 hours candlestick data
         *                      4hour : 4 hours candlestick data
         *                      6hour : 6 hours candlestick data
         *                      12hour : 12 hours candlestick data
         * @param {number=} [data.size] data size to be acquired
         * @param {number=} [data.since] timestamp(eg:1417536000000). data after the timestamp will be returned
         * @returns kline data
         */
        kline: {
            url: '/kline.do',
            type: 'GET',
            queryStrings: {
                symbol: 'symbol',
                type: 'type',
                size: 'size',
                since: 'since',
            },
            exampleResponse: [
                [1492981200000, 14.55, 14.83, 14.247, 14.341, 18348.988],
                [1492983000000, 14.351, 14.8, 14.322, 14.48, 22461.64],
                [1492984800000, 14.444, 14.7, 14.444, 14.664, 10452.874]
            ]
        },

        /**
         * Receive the latest contract data
         * @param {Object=} [data]
         * @param {string=} [data.symbol] the currency pair to retrieve data for.  Either btc_usd or ltc_usd
         * @param {string=} [data.contractType] selection of one of following
         *                      - this_week
         *                      - next_week
         *                      - quarter
         * @returns latest contract data
         */
        contractPrice: {
            url: '/future_ticker.do',
            type: 'GET',
            queryStrings: {
                symbol: 'symbol',
                contractType: 'contract_type',
            },
            exampleResponse: {
                "date": "1492986680",
                "ticker": {
                    "buy": 11.609,
                    "coin_vol": 0,
                    "contract_id": 20170428115,
                    "high": 11.962,
                    "last": 11.616,
                    "low": 10.556,
                    "sell": 11.622,
                    "unit_amount": 10,
                    "vol": 385672
                }
            }
        },

    }
};

export default createEndpoints(apis);
