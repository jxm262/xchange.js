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

    },
};

export default createEndpoints(apis);
