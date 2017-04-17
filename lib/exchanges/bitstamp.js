/**
 * API docs - https://www.bitstamp.net/api/
 *
 */
import { createEndpoints } from '../parsers';


export const apis = {

    rootUrl: 'https://www.bitstamp.net/api/v2',

    unauthenticated: {

        /**
         * Get Ticker price
         * @param {Object} [data]
         * @param {string} [data.currencyPair] the currency pair to retrieve data for
         * @returns ticker data
         */
        ticker: {
            url: '/ticker/<%=currencyPair%>',
            type: 'GET',
            segmented: ['currencyPair'],
            exampleResponse: {
                "high": "1192.50",
                "last": "1181.40",
                "timestamp": "1492456833",
                "bid": "1178.55",
                "vwap": "1178.25",
                "volume": "3300.97957797",
                "low": "1161.00",
                "ask": "1181.39",
                "open": "1162.31"
            }
        },

    },
};

export default createEndpoints(apis);
