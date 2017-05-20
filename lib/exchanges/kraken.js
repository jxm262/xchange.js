/**
 * API docs - https://www.kraken.com/help/api
 *
 */
import { createEndpoints } from '../parsers';


/**
 * @namespace kraken
 */
export const apis = {

    rootUrl: 'https://api.kraken.com',

    unauthenticated: {

        /**
         * Get Server Time
         * This is to aid in approximating the skew time between the server and client.
         * @returns servers time
         */
        serverTime: {
            url: '/0/public/Time',
            type: 'GET',
            exampleResponse: {
                "error": [],
                "error": [],
                "result": {
                    "unixtime": 1491077507,
                    "rfc1123": "Sat,  1 Apr 17 20:11:47 +0000"
                }
            }
        },

        /**
         * Get Asset Info
         * @param {Object} [data]
         * @param {string} [data.info = all] info to retrieve
         * @param {string} [data.aclass = currency] asset class
         * @param {string} [data.asset = all] comma delimited list of assets to get info on
         * @param {function=} cb - node style callback
         * @returns {Object} array of asset names and their info
         */
        assets: {
            url: '/0/public/Assets',
            type: 'GET',
            exampleResponse: {
                "error": [],
                "result": {
                    "ZJPY": {
                        "aclass": "currency",
                        "altname": "JPY",
                        "decimals": 2,
                        "display_decimals": 0
                    },
                    "ZUSD": {
                        "aclass": "currency",
                        "altname": "USD",
                        "decimals": 4,
                        "display_decimals": 2
                    }
                }
            }
        },

        //fix old -
        //* @param {string='all', 'leverage', 'fees', 'margin')} [data.info = all] info to retrieve

        /**
         * Get tradable asset pairs
         * @param {Object} [data]
         * @param {string=} [data.info = info] info to retrieve
         * @param {array} [data.pair = ['all']] comma delimited list of asset pairs to get info on
         * @param {function=} cb - node style callback
         * @returns {Object} array of pair names and their info
         */
        assetPairs: {
            url: '/0/public/AssetPairs',
            type: 'GET',
            exampleResponse: {
                "error": [],
                "result": {
                    "USDTZUSD": {
                        "altname": "USDTUSD",
                        "aclass_base": "currency",
                        "base": "USDT",
                        "aclass_quote": "currency",
                        "quote": "ZUSD",
                        "lot": "unit",
                        "pair_decimals": 4,
                        "lot_decimals": 8,
                        "lot_multiplier": 1,
                        "leverage_buy": [],
                        "leverage_sell": [],
                        "fees": [
                            [
                                0,
                                0.2
                            ],
                            [
                                50000,
                                0.16
                            ]
                        ],
                        "fees_maker": [
                            [
                                0,
                                0.2
                            ],
                            [
                                50000,
                                0.16
                            ],
                        ],
                        "fee_volume_currency": "ZUSD",
                        "margin_call": 80,
                        "margin_stop": 40
                    },
                    "XETCXETH": {
                        "altname": "ETCETH",
                        "aclass_base": "currency",
                        "base": "XETC",
                        "aclass_quote": "currency",
                        "quote": "XETH",
                        "lot": "unit",
                        "pair_decimals": 8,
                        "lot_decimals": 8,
                        "lot_multiplier": 1,
                        "leverage_buy": [
                            2
                        ],
                        "leverage_sell": [
                            2
                        ],
                        "fees": [
                            [
                                0,
                                0.26
                            ],
                            [
                                50000,
                                0.24
                            ]
                        ],
                        "fees_maker": [
                            [
                                0,
                                0.16
                            ],
                            [
                                50000,
                                0.14
                            ]
                        ],
                        "fee_volume_currency": "ZUSD",
                        "margin_call": 80,
                        "margin_stop": 40
                    }
                }
            }
        },

        //todo fix old
        //* @param {number=1, 5, 15, 30, 60, 240, 1440, 10080, 21600} [data.interval = 1] time frame interval in minutes (optional)

        /**
         * Get OHLC data
         * @param {Object} [data]
         * @param {string} [data.pair = all] asset pair to get OHLC data for
         * @param {number=} [data.interval = 1] time frame interval in minutes (optional)
         * @param {string=} [data.since] return trade data since given id (optional.  exclusive)
         * @param {function=} cb - node style callback
         * @returns {Object} array of pair name and OHLC data
         */
        ohlc: {
            url: '/0/public/OHLC',
            type: 'GET',
            exampleResponse: {
                "error": [],
                "result": {
                    "USDTZUSD": [
                        [
                            1491269700,
                            "0.9990",
                            "0.9990",
                            "0.9990",
                            "0.9990",
                            "0.0000",
                            "0.00000000",
                            0
                        ],
                        [
                            1491269760,
                            "0.9990",
                            "0.9990",
                            "0.9990",
                            "0.9990",
                            "0.0000",
                            "0.00000000",
                            0
                        ]
                    ],
                    "last": 1491269700
                }
            }
        },

        /**
         * Get Order Book
         * @param {Object} [data]
         * @param {string} [data.pair = all] comma delimited list of asset pairs to get info on
         * @param {number=} [data.count] maximum number of asks/bids (optional)
         * @param {function=} cb - node style callback
         * @returns {Object} array of pair name and market depth
         */
        orderBook: {
            url: '/0/public/Depth',
            type: 'GET',
            exampleResponse: {
                "error": [],
                "result": {
                    "USDTZUSD": {
                        "asks": [
                            [
                                "0.99990000",
                                "1197.640",
                                1491270406
                            ],
                            [
                                "1.00000000",
                                "139591.372",
                                1491264957
                            ]
                        ],
                        "bids": [
                            [
                                "0.99910000",
                                "193.814",
                                1491271114
                            ],
                            [
                                "0.99900000",
                                "11840.887",
                                1491269156
                            ]
                        ]
                    }
                }
            }
        },

        /**
         * Get Recent Trades
         * @param {Object} [data]
         * @param {string} [data.pair = all] comma delimited list of asset pairs to get info on
         * @param {string=} [data.since] return trade data since given id (optional.  exclusive)
         * @param {function=} cb - node style callback
         * @returns {Object} array of pair name and recent trade data
         */
        recentTrades: {
            url: '/0/public/Trades',
            type: 'GET',
            exampleResponse: {
                "error": [],
                "result": {
                    "USDTZUSD": [
                        [
                            "1.00100000",
                            "1000.00000000",
                            1491158215.0337,
                            "b",
                            "l",
                            ""
                        ],
                        [
                            "1.00100000",
                            "1000.00000000",
                            1491158215.8635,
                            "b",
                            "l",
                            ""
                        ]
                    ],
                    "last": "1491269156362842889"
                }
            }
        },

        /**
         * Get Recent Spread
         * @param {Object} [data]
         * @param {string} [data.pair = all] comma delimited list of asset pairs to get info on
         * @param {string=} [data.since] return trade data since given id (optional.  exclusive)
         * @param {function=} cb - node style callback
         * @returns {Object} array of pair name and recent spread data
         */
        recentSpread: {
            url: '/0/public/Spread',
            type: 'GET',
            exampleResponse: {
                "error": [],
                "result": {
                    "USDTZUSD": [
                        [
                            1491208373,
                            "0.99800000",
                            "0.99890000"
                        ],
                        [
                            1491208878,
                            "0.99810000",
                            "0.99890000"
                        ],
                        [
                            1491209034,
                            "0.99800000",
                            "0.99890000"
                        ]
                    ],
                    "last": 1491271114
                }
            }
        },

        //todo ticker - when we migrate the legacy stuff, we'll add this api
    },
};

export default createEndpoints(apis);
