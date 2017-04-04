import nock from 'nock';
import chai from 'chai';
import sinon from 'sinon';
import request from 'supertest';
import krakenModule from '../../lib/exchanges/kraken'
import config from '../../lib/config'
const should = chai.should();


const serverTimeResp = {
    "error": [],
    "result": {
        "unixtime": 1491077507,
        "rfc1123": "Sat,  1 Apr 17 20:11:47 +0000"
    }
};

const assetsResp = {
    "error": [],
    "result": {
        "KFEE": {
            "aclass": "currency",
            "altname": "FEE",
            "decimals": 2,
            "display_decimals": 2
        },
        "USDT": {
            "aclass": "currency",
            "altname": "USDT",
            "decimals": 8,
            "display_decimals": 4
        },
        "XDAO": {
            "aclass": "currency",
            "altname": "DAO",
            "decimals": 10,
            "display_decimals": 3
        },
        "XETC": {
            "aclass": "currency",
            "altname": "ETC",
            "decimals": 10,
            "display_decimals": 5
        },
        "XETH": {
            "aclass": "currency",
            "altname": "ETH",
            "decimals": 10,
            "display_decimals": 5
        },
        "XICN": {
            "aclass": "currency",
            "altname": "ICN",
            "decimals": 10,
            "display_decimals": 5
        },
        "XLTC": {
            "aclass": "currency",
            "altname": "LTC",
            "decimals": 10,
            "display_decimals": 5
        },
        "XMLN": {
            "aclass": "currency",
            "altname": "MLN",
            "decimals": 10,
            "display_decimals": 5
        },
        "XNMC": {
            "aclass": "currency",
            "altname": "NMC",
            "decimals": 10,
            "display_decimals": 5
        },
        "XREP": {
            "aclass": "currency",
            "altname": "REP",
            "decimals": 10,
            "display_decimals": 5
        },
        "XXBT": {
            "aclass": "currency",
            "altname": "XBT",
            "decimals": 10,
            "display_decimals": 5
        },
        "XXDG": {
            "aclass": "currency",
            "altname": "XDG",
            "decimals": 8,
            "display_decimals": 2
        },
        "XXLM": {
            "aclass": "currency",
            "altname": "XLM",
            "decimals": 8,
            "display_decimals": 5
        },
        "XXMR": {
            "aclass": "currency",
            "altname": "XMR",
            "decimals": 10,
            "display_decimals": 5
        },
        "XXRP": {
            "aclass": "currency",
            "altname": "XRP",
            "decimals": 8,
            "display_decimals": 5
        },
        "XXVN": {
            "aclass": "currency",
            "altname": "XVN",
            "decimals": 4,
            "display_decimals": 2
        },
        "XZEC": {
            "aclass": "currency",
            "altname": "ZEC",
            "decimals": 10,
            "display_decimals": 5
        },
        "ZCAD": {
            "aclass": "currency",
            "altname": "CAD",
            "decimals": 4,
            "display_decimals": 2
        },
        "ZEUR": {
            "aclass": "currency",
            "altname": "EUR",
            "decimals": 4,
            "display_decimals": 2
        },
        "ZGBP": {
            "aclass": "currency",
            "altname": "GBP",
            "decimals": 4,
            "display_decimals": 2
        },
        "ZJPY": {
            "aclass": "currency",
            "altname": "JPY",
            "decimals": 2,
            "display_decimals": 0
        },
        "ZKRW": {
            "aclass": "currency",
            "altname": "KRW",
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
};

const assetPairsResp = {
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
        },
        "XETCXXBT": {
            "altname": "ETCXBT",
            "aclass_base": "currency",
            "base": "XETC",
            "aclass_quote": "currency",
            "quote": "XXBT",
            "lot": "unit",
            "pair_decimals": 8,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [
                2,
                3
            ],
            "leverage_sell": [
                2,
                3
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
        },
        "XETCZEUR": {
            "altname": "ETCEUR",
            "aclass_base": "currency",
            "base": "XETC",
            "aclass_quote": "currency",
            "quote": "ZEUR",
            "lot": "unit",
            "pair_decimals": 5,
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XETCZUSD": {
            "altname": "ETCUSD",
            "aclass_base": "currency",
            "base": "XETC",
            "aclass_quote": "currency",
            "quote": "ZUSD",
            "lot": "unit",
            "pair_decimals": 5,
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
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XETHXXBT": {
            "altname": "ETHXBT",
            "aclass_base": "currency",
            "base": "XETH",
            "aclass_quote": "currency",
            "quote": "XXBT",
            "lot": "unit",
            "pair_decimals": 6,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [
                2,
                3,
                4
            ],
            "leverage_sell": [
                2,
                3,
                4
            ],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XETHXXBT.d": {
            "altname": "ETHXBT.d",
            "aclass_base": "currency",
            "base": "XETH",
            "aclass_quote": "currency",
            "quote": "XXBT",
            "lot": "unit",
            "pair_decimals": 6,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.36
                ],
                [
                    50000,
                    0.34
                ],
                [
                    100000,
                    0.32
                ],
                [
                    250000,
                    0.3
                ],
                [
                    500000,
                    0.28
                ],
                [
                    1000000,
                    0.26
                ],
                [
                    2500000,
                    0.24
                ],
                [
                    5000000,
                    0.22
                ],
                [
                    10000000,
                    0.2
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XETHZCAD": {
            "altname": "ETHCAD",
            "aclass_base": "currency",
            "base": "XETH",
            "aclass_quote": "currency",
            "quote": "ZCAD",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XETHZCAD.d": {
            "altname": "ETHCAD.d",
            "aclass_base": "currency",
            "base": "XETH",
            "aclass_quote": "currency",
            "quote": "ZCAD",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.36
                ],
                [
                    50000,
                    0.34
                ],
                [
                    100000,
                    0.32
                ],
                [
                    250000,
                    0.3
                ],
                [
                    500000,
                    0.28
                ],
                [
                    1000000,
                    0.26
                ],
                [
                    2500000,
                    0.24
                ],
                [
                    5000000,
                    0.22
                ],
                [
                    10000000,
                    0.2
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XETHZEUR": {
            "altname": "ETHEUR",
            "aclass_base": "currency",
            "base": "XETH",
            "aclass_quote": "currency",
            "quote": "ZEUR",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [
                2,
                3
            ],
            "leverage_sell": [
                2,
                3
            ],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XETHZEUR.d": {
            "altname": "ETHEUR.d",
            "aclass_base": "currency",
            "base": "XETH",
            "aclass_quote": "currency",
            "quote": "ZEUR",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.36
                ],
                [
                    50000,
                    0.34
                ],
                [
                    100000,
                    0.32
                ],
                [
                    250000,
                    0.3
                ],
                [
                    500000,
                    0.28
                ],
                [
                    1000000,
                    0.26
                ],
                [
                    2500000,
                    0.24
                ],
                [
                    5000000,
                    0.22
                ],
                [
                    10000000,
                    0.2
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XETHZGBP": {
            "altname": "ETHGBP",
            "aclass_base": "currency",
            "base": "XETH",
            "aclass_quote": "currency",
            "quote": "ZGBP",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XETHZGBP.d": {
            "altname": "ETHGBP.d",
            "aclass_base": "currency",
            "base": "XETH",
            "aclass_quote": "currency",
            "quote": "ZGBP",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.36
                ],
                [
                    50000,
                    0.34
                ],
                [
                    100000,
                    0.32
                ],
                [
                    250000,
                    0.3
                ],
                [
                    500000,
                    0.28
                ],
                [
                    1000000,
                    0.26
                ],
                [
                    2500000,
                    0.24
                ],
                [
                    5000000,
                    0.22
                ],
                [
                    10000000,
                    0.2
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XETHZJPY": {
            "altname": "ETHJPY",
            "aclass_base": "currency",
            "base": "XETH",
            "aclass_quote": "currency",
            "quote": "ZJPY",
            "lot": "unit",
            "pair_decimals": 3,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XETHZJPY.d": {
            "altname": "ETHJPY.d",
            "aclass_base": "currency",
            "base": "XETH",
            "aclass_quote": "currency",
            "quote": "ZJPY",
            "lot": "unit",
            "pair_decimals": 3,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.36
                ],
                [
                    50000,
                    0.34
                ],
                [
                    100000,
                    0.32
                ],
                [
                    250000,
                    0.3
                ],
                [
                    500000,
                    0.28
                ],
                [
                    1000000,
                    0.26
                ],
                [
                    2500000,
                    0.24
                ],
                [
                    5000000,
                    0.22
                ],
                [
                    10000000,
                    0.2
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XETHZUSD": {
            "altname": "ETHUSD",
            "aclass_base": "currency",
            "base": "XETH",
            "aclass_quote": "currency",
            "quote": "ZUSD",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [
                2,
                3
            ],
            "leverage_sell": [
                2,
                3
            ],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XETHZUSD.d": {
            "altname": "ETHUSD.d",
            "aclass_base": "currency",
            "base": "XETH",
            "aclass_quote": "currency",
            "quote": "ZUSD",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.36
                ],
                [
                    50000,
                    0.34
                ],
                [
                    100000,
                    0.32
                ],
                [
                    250000,
                    0.3
                ],
                [
                    500000,
                    0.28
                ],
                [
                    1000000,
                    0.26
                ],
                [
                    2500000,
                    0.24
                ],
                [
                    5000000,
                    0.22
                ],
                [
                    10000000,
                    0.2
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XICNXETH": {
            "altname": "ICNETH",
            "aclass_base": "currency",
            "base": "XICN",
            "aclass_quote": "currency",
            "quote": "XETH",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XICNXXBT": {
            "altname": "ICNXBT",
            "aclass_base": "currency",
            "base": "XICN",
            "aclass_quote": "currency",
            "quote": "XXBT",
            "lot": "unit",
            "pair_decimals": 6,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XLTCXXBT": {
            "altname": "LTCXBT",
            "aclass_base": "currency",
            "base": "XLTC",
            "aclass_quote": "currency",
            "quote": "XXBT",
            "lot": "unit",
            "pair_decimals": 6,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XLTCZEUR": {
            "altname": "LTCEUR",
            "aclass_base": "currency",
            "base": "XLTC",
            "aclass_quote": "currency",
            "quote": "ZEUR",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XLTCZUSD": {
            "altname": "LTCUSD",
            "aclass_base": "currency",
            "base": "XLTC",
            "aclass_quote": "currency",
            "quote": "ZUSD",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XMLNXETH": {
            "altname": "MLNETH",
            "aclass_base": "currency",
            "base": "XMLN",
            "aclass_quote": "currency",
            "quote": "XETH",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XMLNXXBT": {
            "altname": "MLNXBT",
            "aclass_base": "currency",
            "base": "XMLN",
            "aclass_quote": "currency",
            "quote": "XXBT",
            "lot": "unit",
            "pair_decimals": 6,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XREPXETH": {
            "altname": "REPETH",
            "aclass_base": "currency",
            "base": "XREP",
            "aclass_quote": "currency",
            "quote": "XETH",
            "lot": "unit",
            "pair_decimals": 5,
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
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XREPXXBT": {
            "altname": "REPXBT",
            "aclass_base": "currency",
            "base": "XREP",
            "aclass_quote": "currency",
            "quote": "XXBT",
            "lot": "unit",
            "pair_decimals": 6,
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
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XREPZEUR": {
            "altname": "REPEUR",
            "aclass_base": "currency",
            "base": "XREP",
            "aclass_quote": "currency",
            "quote": "ZEUR",
            "lot": "unit",
            "pair_decimals": 5,
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
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XREPZUSD": {
            "altname": "REPUSD",
            "aclass_base": "currency",
            "base": "XREP",
            "aclass_quote": "currency",
            "quote": "ZUSD",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXBTZCAD": {
            "altname": "XBTCAD",
            "aclass_base": "currency",
            "base": "XXBT",
            "aclass_quote": "currency",
            "quote": "ZCAD",
            "lot": "unit",
            "pair_decimals": 3,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXBTZCAD.d": {
            "altname": "XBTCAD.d",
            "aclass_base": "currency",
            "base": "XXBT",
            "aclass_quote": "currency",
            "quote": "ZCAD",
            "lot": "unit",
            "pair_decimals": 3,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.36
                ],
                [
                    50000,
                    0.34
                ],
                [
                    100000,
                    0.32
                ],
                [
                    250000,
                    0.3
                ],
                [
                    500000,
                    0.28
                ],
                [
                    1000000,
                    0.26
                ],
                [
                    2500000,
                    0.24
                ],
                [
                    5000000,
                    0.22
                ],
                [
                    10000000,
                    0.2
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXBTZEUR": {
            "altname": "XBTEUR",
            "aclass_base": "currency",
            "base": "XXBT",
            "aclass_quote": "currency",
            "quote": "ZEUR",
            "lot": "unit",
            "pair_decimals": 3,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [
                2,
                3,
                4,
                5
            ],
            "leverage_sell": [
                2,
                3,
                4,
                5
            ],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXBTZEUR.d": {
            "altname": "XBTEUR.d",
            "aclass_base": "currency",
            "base": "XXBT",
            "aclass_quote": "currency",
            "quote": "ZEUR",
            "lot": "unit",
            "pair_decimals": 3,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.36
                ],
                [
                    50000,
                    0.34
                ],
                [
                    100000,
                    0.32
                ],
                [
                    250000,
                    0.3
                ],
                [
                    500000,
                    0.28
                ],
                [
                    1000000,
                    0.26
                ],
                [
                    2500000,
                    0.24
                ],
                [
                    5000000,
                    0.22
                ],
                [
                    10000000,
                    0.2
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXBTZGBP": {
            "altname": "XBTGBP",
            "aclass_base": "currency",
            "base": "XXBT",
            "aclass_quote": "currency",
            "quote": "ZGBP",
            "lot": "unit",
            "pair_decimals": 3,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXBTZGBP.d": {
            "altname": "XBTGBP.d",
            "aclass_base": "currency",
            "base": "XXBT",
            "aclass_quote": "currency",
            "quote": "ZGBP",
            "lot": "unit",
            "pair_decimals": 3,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.36
                ],
                [
                    50000,
                    0.34
                ],
                [
                    100000,
                    0.32
                ],
                [
                    250000,
                    0.3
                ],
                [
                    500000,
                    0.28
                ],
                [
                    1000000,
                    0.26
                ],
                [
                    2500000,
                    0.24
                ],
                [
                    5000000,
                    0.22
                ],
                [
                    10000000,
                    0.2
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXBTZJPY": {
            "altname": "XBTJPY",
            "aclass_base": "currency",
            "base": "XXBT",
            "aclass_quote": "currency",
            "quote": "ZJPY",
            "lot": "unit",
            "pair_decimals": 1,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXBTZJPY.d": {
            "altname": "XBTJPY.d",
            "aclass_base": "currency",
            "base": "XXBT",
            "aclass_quote": "currency",
            "quote": "ZJPY",
            "lot": "unit",
            "pair_decimals": 1,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.36
                ],
                [
                    50000,
                    0.34
                ],
                [
                    100000,
                    0.32
                ],
                [
                    250000,
                    0.3
                ],
                [
                    500000,
                    0.28
                ],
                [
                    1000000,
                    0.26
                ],
                [
                    2500000,
                    0.24
                ],
                [
                    5000000,
                    0.22
                ],
                [
                    10000000,
                    0.2
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXBTZUSD": {
            "altname": "XBTUSD",
            "aclass_base": "currency",
            "base": "XXBT",
            "aclass_quote": "currency",
            "quote": "ZUSD",
            "lot": "unit",
            "pair_decimals": 3,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [
                2,
                3
            ],
            "leverage_sell": [
                2,
                3
            ],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXBTZUSD.d": {
            "altname": "XBTUSD.d",
            "aclass_base": "currency",
            "base": "XXBT",
            "aclass_quote": "currency",
            "quote": "ZUSD",
            "lot": "unit",
            "pair_decimals": 3,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.36
                ],
                [
                    50000,
                    0.34
                ],
                [
                    100000,
                    0.32
                ],
                [
                    250000,
                    0.3
                ],
                [
                    500000,
                    0.28
                ],
                [
                    1000000,
                    0.26
                ],
                [
                    2500000,
                    0.24
                ],
                [
                    5000000,
                    0.22
                ],
                [
                    10000000,
                    0.2
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXDGXXBT": {
            "altname": "XDGXBT",
            "aclass_base": "currency",
            "base": "XXDG",
            "aclass_quote": "currency",
            "quote": "XXBT",
            "lot": "unit",
            "pair_decimals": 8,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXLMXXBT": {
            "altname": "XLMXBT",
            "aclass_base": "currency",
            "base": "XXLM",
            "aclass_quote": "currency",
            "quote": "XXBT",
            "lot": "unit",
            "pair_decimals": 8,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXLMZEUR": {
            "altname": "XLMEUR",
            "aclass_base": "currency",
            "base": "XXLM",
            "aclass_quote": "currency",
            "quote": "ZEUR",
            "lot": "unit",
            "pair_decimals": 6,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXLMZUSD": {
            "altname": "XLMUSD",
            "aclass_base": "currency",
            "base": "XXLM",
            "aclass_quote": "currency",
            "quote": "ZUSD",
            "lot": "unit",
            "pair_decimals": 6,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXMRXXBT": {
            "altname": "XMRXBT",
            "aclass_base": "currency",
            "base": "XXMR",
            "aclass_quote": "currency",
            "quote": "XXBT",
            "lot": "unit",
            "pair_decimals": 6,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [
                2,
                3
            ],
            "leverage_sell": [
                2,
                3
            ],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXMRZEUR": {
            "altname": "XMREUR",
            "aclass_base": "currency",
            "base": "XXMR",
            "aclass_quote": "currency",
            "quote": "ZEUR",
            "lot": "unit",
            "pair_decimals": 5,
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
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXMRZUSD": {
            "altname": "XMRUSD",
            "aclass_base": "currency",
            "base": "XXMR",
            "aclass_quote": "currency",
            "quote": "ZUSD",
            "lot": "unit",
            "pair_decimals": 5,
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
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XXRPXXBT": {
            "altname": "XRPXBT",
            "aclass_base": "currency",
            "base": "XXRP",
            "aclass_quote": "currency",
            "quote": "XXBT",
            "lot": "unit",
            "pair_decimals": 8,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XZECXXBT": {
            "altname": "ZECXBT",
            "aclass_base": "currency",
            "base": "XZEC",
            "aclass_quote": "currency",
            "quote": "XXBT",
            "lot": "unit",
            "pair_decimals": 6,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XZECZEUR": {
            "altname": "ZECEUR",
            "aclass_base": "currency",
            "base": "XZEC",
            "aclass_quote": "currency",
            "quote": "ZEUR",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XZECZUSD": {
            "altname": "ZECUSD",
            "aclass_base": "currency",
            "base": "XZEC",
            "aclass_quote": "currency",
            "quote": "ZUSD",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "leverage_buy": [],
            "leverage_sell": [],
            "fees": [
                [
                    0,
                    0.26
                ],
                [
                    50000,
                    0.24
                ],
                [
                    100000,
                    0.22
                ],
                [
                    250000,
                    0.2
                ],
                [
                    500000,
                    0.18
                ],
                [
                    1000000,
                    0.16
                ],
                [
                    2500000,
                    0.14
                ],
                [
                    5000000,
                    0.12
                ],
                [
                    10000000,
                    0.1
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
                ],
                [
                    100000,
                    0.12
                ],
                [
                    250000,
                    0.1
                ],
                [
                    500000,
                    0.08
                ],
                [
                    1000000,
                    0.06
                ],
                [
                    2500000,
                    0.04
                ],
                [
                    5000000,
                    0.02
                ],
                [
                    10000000,
                    0
                ]
            ],
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        }
    }
};

const ohlcResp = {
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
};

const orderBookResp = {
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
                ],
                [
                    "1.00050000",
                    "8000.000",
                    1491252461
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
                ],
                [
                    "0.99850000",
                    "17000.000",
                    1491269350
                ]
            ]
        }
    }
};

const recentTradesResp = {
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
            ],
            [
                "1.00100000",
                "1000.00000000",
                1491158216.5049,
                "b",
                "l",
                ""
            ]
        ],
        "last": "1491269156362842889"
    }
};

const errMsg = {msg: "test-error"};


const kraken = krakenModule(config);

nock('https://api.kraken.com')
    .get('/0/public/Time')
    .twice()
    .reply(200, serverTimeResp);

nock('https://api.kraken.com')
    .get('/0/public/Time')
    .twice()
    .replyWithError(errMsg);

nock('https://api.kraken.com')
    .get('/0/public/Assets')
    .twice()
    .reply(200, assetsResp);

nock('https://api.kraken.com')
    .get('/0/public/Assets')
    .twice()
    .replyWithError(errMsg);

nock('https://api.kraken.com')
    .get('/0/public/AssetPairs')
    .twice()
    .reply(200, assetPairsResp);

nock('https://api.kraken.com')
    .get('/0/public/AssetPairs')
    .twice()
    .replyWithError(errMsg);

nock('https://api.kraken.com')
    .post('/0/public/OHLC', {
        "pair": "USDTZUSD"
    })
    .twice()
    .reply(200, ohlcResp);

nock('https://api.kraken.com')
    .post('/0/public/OHLC')
    .twice()
    .replyWithError(errMsg);

nock('https://api.kraken.com')
    .post('/0/public/Depth', {
        "pair": "USDTZUSD"
    })
    .twice()
    .reply(200, orderBookResp);

nock('https://api.kraken.com')
    .post('/0/public/Depth')
    .twice()
    .replyWithError(errMsg);

nock('https://api.kraken.com')
    .post('/0/public/Trades', {
        "pair": "USDTZUSD"
    })
    .twice()
    .reply(200, recentTradesResp);

nock('https://api.kraken.com')
    .post('/0/public/Trades')
    .twice()
    .replyWithError(errMsg);


function success(expected, done) {
    return function (resp) {
        resp.should.deep.equal(expected);
        done();
    }
}

function failure(done) {
    return function (err) {
        err.should.deep.equal(errMsg);
        done();
    }
}


describe.only('kraken', function () {

    describe('serverTime', function () {

        context('success call', function () {
            it('retrieves server time using cb', function (done) {
                kraken.serverTime(function (err, resp) {
                    resp.should.deep.equal(serverTimeResp);
                    done();
                });
            });

            it('retrieves server time using promise', function (done) {
                kraken.serverTime().then(
                    success(serverTimeResp, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                kraken.serverTime(function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                kraken.serverTime().then(
                    success,
                    failure(done)
                );
            });
        });

    });

    describe('assets', function () {

        context('success call', function () {
            it('retrieves asset info using cb', function (done) {
                kraken.assets(function (err, resp) {
                    resp.should.deep.equal(assetsResp);
                    done();
                });
            });

            it('retrieves asset info using using promise', function (done) {
                kraken.assets().then(
                    success(assetsResp, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                kraken.assets(function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                kraken.assets().then(
                    success,
                    failure(done)
                );
            });
        });

    });

    describe('asset pairs', function () {

        context('success call', function () {
            it('retrieves asset pairs using cb', function (done) {
                kraken.assetPairs(function (err, resp) {
                    resp.should.deep.equal(assetPairsResp);
                    done();
                });
            });

            it('retrieves asset pairs using using promise', function (done) {
                kraken.assetPairs().then(
                    success(assetPairsResp, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                kraken.assetPairs(function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                kraken.assetPairs().then(
                    success,
                    failure(done)
                );
            });
        });

    });

    describe('ohlc', function () {

        const data = { "pair": "USDTZUSD" };

        context('success call', function () {
            it('retrieves array of pair name and ohlc using cb', function (done) {

                kraken.ohlc(data, function (err, resp) {
                    resp.should.deep.equal(ohlcResp);
                    done();
                });
            });

            it('retrieves array of pair name and ohlc using using promise', function (done) {
                kraken.ohlc(data).then(
                    success(ohlcResp, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                kraken.ohlc(null, function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                kraken.ohlc().then(
                    success,
                    failure(done)
                );
            });
        });

    });

    describe('orderBook', function () {

        const data = { "pair": "USDTZUSD" };

        context('success call', function () {
            it('retrieves array of pair name and market depth using cb', function (done) {

                kraken.orderBook(data, function (err, resp) {
                    resp.should.deep.equal(orderBookResp);
                    done();
                });
            });

            it('retrieves array of pair name and market depth using promise', function (done) {
                kraken.orderBook(data).then(
                    success(orderBookResp, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                kraken.orderBook(null, function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                kraken.orderBook().then(
                    success,
                    failure(done)
                );
            });
        });

    });

    describe('recentTrades', function () {

        const data = { "pair": "USDTZUSD" };

        context('success call', function () {
            it('retrieves array of pair name and recent trade data using cb', function (done) {

                kraken.recentTrades(data, function (err, resp) {
                    resp.should.deep.equal(recentTradesResp);
                    done();
                });
            });

            it('retrieves array of pair name and recent trade data using promise', function (done) {
                kraken.recentTrades(data).then(
                    success(recentTradesResp, done),
                    failure
                );
            });
        });

        context('failure call', function () {
            it('retrieves error using cb', function (done) {
                kraken.recentTrades(null, function (err, resp) {
                    err.should.deep.equal(errMsg)
                    done();
                });
            });

            it('retrieves error using promise', function (done) {
                kraken.recentTrades().then(
                    success,
                    failure(done)
                );
            });
        });

    });

    //describe('ticker', function () {
    //	it('returns ticker info on good resp', function(done) {
    //		xchange.kraken.ticker(function(error, resp){
    //			console.log("--here.. ", resp);
    //			if(!error){
    //				console.log(resp);
    //			}
    //			done();
    //		});
    //	});
    //
    //	it('returns error on bad response', function() {
    //		//todo
    //	});
    //
    //});

});
