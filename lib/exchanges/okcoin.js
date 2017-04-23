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

    }
};

export default createEndpoints(apis);
