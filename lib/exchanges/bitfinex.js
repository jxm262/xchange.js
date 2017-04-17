/**
 * API docs - http://docs.bitfinex.com/v1/docs/public-endpoints
 *
 */
import { createEndpoints } from '../parsers';


export const apis = {

    rootUrl: 'https://api.bitfinex.com/v1',

    unauthenticated: {

        /**
         * Get Ticker price
         * @param {Object} [data]
         * @param {string} [data.symbol] the currency symbol to retrieve data for
         * @returns ticker data
         */
        ticker: {
            url: '/pubticker/<%=symbol%>',
            type: 'GET',
            segmented: ['symbol'],
            exampleResponse: {
                "mid":"244.755",
                "bid":"244.75",
                "ask":"244.76",
                "last_price":"244.82",
                "low":"244.2",
                "high":"248.19",
                "volume":"7842.11542563",
                "timestamp":"1444253422.348340958"
            }
        },

    },
};

export default createEndpoints(apis);
