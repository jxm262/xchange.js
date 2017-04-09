/**
 * API docs - https://www.kraken.com/help/api
 *
 */
import request from 'superagent';
import { mapValues } from 'lodash';


const userAgent = {'User-Agent': 'xchange.js'};

export const rootUrl = 'https://api.kraken.com';

export const endpoints = {

    unauthenticated: {
        serverTime: {
            url: '/0/public/Time',
            type: 'GET',
            exampleResponse: {
                "error": [],
                "result": {
                    "unixtime": 1491077507,
                    "rfc1123": "Sat,  1 Apr 17 20:11:47 +0000"
                }
            }
        },

        /**
         * @param {Object} [data]
         * @param {String} [data.info = all] info to retrieve
         * @param {String} [data.aclass = currency] asset class
         * @param {String} [data.asset = all] comma delimited list of assets to get info on
         * @param {function=} cb - node style callback
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

        ohlc: {
            url: '/0/public/OHLC',
            type: 'POST',
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

        orderBook: {
            url: '/0/public/Depth',
            type: 'POST',
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

        recentTrades: {
            url: '/0/public/Trades',
            type: 'POST',
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

        recentSpread: {
            url: '/0/public/Spread',
            type: 'POST',
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
    },
};

function parseResponse(req, cb) {
    if (!cb) {
        return req
            .then((resp) => {
                return Promise.resolve(resp.body)
            })
            .catch((err) => {
                return Promise.reject(err)
            });
    }

    req.end((err, res) => {
        const response = (res) ? res.body : res;
        cb.apply(this, [err, response]);
    });
}

function createEndpoints() {
    //todo authed
    const unauth = endpoints.unauthenticated;

    const mapped = mapValues(unauth, (next) => {

        const url = rootUrl + next.url;

        return (data, cb) => {
            const req = request(next.type, url)
                .set(userAgent)
                .send(data);

            return parseResponse(req, cb);
        };
    });

    return mapped;
}

export default createEndpoints();
