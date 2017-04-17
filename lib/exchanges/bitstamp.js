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

        /**
         * Get Hourly Ticker
         * @param {Object} [data]
         * @param {string} [data.currencyPair] the currency pair to retrieve data for
         */
        hourlyTicker: {
            url: '/ticker_hour/<%=currencyPair%>',
            type: 'GET',
            segmented: ['currencyPair'],
            exampleResponse: {
                "high": "1185.78",
                "last": "1181.40",
                "timestamp": "1492456970",
                "bid": "1178.77",
                "vwap": "1181.22",
                "volume": "353.50490750",
                "low": "1175.10",
                "ask": "1181.40",
                "open": "1162.31"
            }
        },

        /**
         * Get Order Book
         * @param {Object} [data]
         * @param {string} [data.currencyPair] the currency pair to retrieve data for
         */
        orderBook: {
            url: '/order_book/<%=currencyPair%>',
            type: 'GET',
            segmented: ['currencyPair'],
            exampleResponse: {
                "timestamp": "1492457113",
                "bids": [
                    [
                        "1179.29",
                        "0.39000000"
                    ],
                    [
                        "1179.21",
                        "15.85206426"
                    ]
                ],
                "asks": [
                    [
                        "1180.37",
                        "0.12000000"
                    ],
                    [
                        "1181.40",
                        "5.72200166"
                    ]
                ]
            },
        },
    }
};

export default createEndpoints(apis);
