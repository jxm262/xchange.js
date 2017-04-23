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
         * @param {string=}  [data.symbol] the currency pair to retrieve data for
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

    }
};

export default createEndpoints(apis);
