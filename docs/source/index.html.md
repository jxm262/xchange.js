---
title: API Reference


toc_footers:
  - <a href='#'>https://github.com/jxm262/xchange.js</a>


search: true
---

# Installation
```javascript
npm install xchange 

# Introduction
```javascript
import xchange from 'xchange.js';
```  

> example usage (callbacks)

```javascript
xchange.coinbase.sellPrice({currencyPair: 'BTC-USD'}, (err, response) => {
  if (!err)
    console.log(response);  
});

//example without params - pass null as 1st arg
xchange.coinbase.ticker(null, (err, response) => {
  if (!err)
    console.log(res);
});
```

> example usage (Promises)

```javascript
xchange.coinbase.sellPrice({currencyPair: 'BTC-USD'})
  .then((response) => {
    console.log(response);  
  })
  .catch((err) => {
    console.log(err);
  });

//example without params
xchange.coinbase.ticker()
  .then((response) => {
    console.log(response);  
  })
  .catch((err) => {
    console.log(err);
  });
```
XChange.js aggregates different Bitcoin exchanges api's into a convenient JS wrapper.  


**Features**  

- Works both on the Client or Server
- Can use either Callbacks or Promises (es6)  
- Currently supports 6 different exchanges (with more to come)
   - Bitfinex
   - Bitstamp
   - Coinbase
   - BTC-e
   - Kraken
   - OkCoin

[Github Project](https://github.com/jxm262/xchange.js)


# Bitfinex
**Bitfinex API**  

```javascript
import xchange from 'xchange';

xchange.bitfinex[method](params)
```
Uses bitfinex exchange API's [found here](http://docs.bitfinex.com/v1/docs/public-endpoints)


## Ticker  
```javascript
xchange.bitfinex.ticker({symbol: 'BTCUSD'}, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "mid": "244.755",
  "bid": "244.75",
  "ask": "244.76",
  "last_price": "244.82",
  "low": "244.2",
  "high": "248.19",
  "volume": "7842.11542563",
  "timestamp": "1444253422.348340958"
}
```
Get Ticker price


Parameter | Default | Description
--------- | ------- | -----------
symbol | - | the currency symbol to retrieve data for


## Stats
```javascript
xchange.bitfinex.stats({symbol: 'BTCUSD'}, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
[
  {
    "period": 1,
    "volume": "7967.96766158"
  }, 
  {
    "period": 7,
    "volume": "55938.67260266"
  }, 
  {
    "period": 30,
    "volume": "275148.09653645"
  }
]
```
Get statistics data about symbol


Parameter | Default | Description
--------- | ------- | -----------
symbol | - | the currency symbol to retrieve data for


## Funding Book
```javascript
const params = {
  currency: 'USD', 
  limitBids: 10, 
  limitAsks: 10
}

xchange.bitfinex.fundingBook(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "bids": [{
    "rate": "9.1287",
    "amount": "5000.0",
    "period": 30,
    "timestamp": "1444257541.0",
    "frr": "No"
  }],
  "asks": [{
    "rate": "8.3695",
    "amount": "407.5",
    "period": 2,
    "timestamp": "1444260343.0",
    "frr": "No"
  }]
}
```
Get the full margin funding book.


Parameter | Default | Description
--------- | ------- | -----------
currency | - | the currency to retrieve data for
limitBids | 50 | (Optional) limit the number of bids
limitAsks | 50 | (Optional) limit the number of asks


## Order Book
```javascript
const params = {
  symbol: 'BTCUSD',
  limitBids: 10, 
  limitAsks: 10, 
  group: 2
}

xchange.bitfinex.orderBook(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "bids": [{
    "price": "574.61",
    "amount": "0.1439327",
    "timestamp": "1472506127.0"
  }],
  "asks": [{
    "price": "574.62",
    "amount": "19.1334",
    "timestamp": "1472506126.0"
  }]
}
```
Get the full order book.


Parameter | Default | Description
--------- | ------- | -----------
symbol | - | the currency symbol to retrieve data for
limitBids | 50 | (Optional) limit the number of bids
limitAsks | 50 | (Optional) limit the number of asks
group | 1 | (Optional) If 1, orders are grouped by price in the orderbook. If 0, orders are not grouped and sorted individually


## Trades
```javascript
const params = {
  symbol: 'BTCUSD',
  timestamp: '1472506126.0', 
  limitTrades: 10 
}

xchange.bitfinex.trades(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
[
  {
    "timestamp": 1444266681,
    "tid": 11988919,
    "price": "244.8",
    "amount": "0.03297384",
    "exchange": "bitfinex",
    "type": "sell"
  },
  ...
]
```
List most recent trades.


Parameter | Default | Description
--------- | ------- | -----------
symbol | - | the currency symbol to retrieve data for
timestamp | - | (Optional) Only show trades at or after this timestamp
limitTrades | 50 | (Optional) Limit the number of trades returned. Must be >= 1


## Lends
```javascript
const params = {
  currency: 'USD',
  timestamp: '1472506126.0',
  limitLends: 10 
}

xchange.bitfinex.lends(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
[
  {
    "rate": "9.8998",
    "amount_lent": "22528933.77950878",
    "amount_used": "0.0",
    "timestamp": 1444264307
  },
  ...
]
```
Get a list of the most recent funding data for the given currency: total amount provided and Flash Return Rate (in % by 365 days) over time.


Parameter | Default | Description
--------- | ------- | -----------
currency | - | the currency to retrieve data for
timestamp | - | (Optional) Only show trades at or after this timestamp
limitLends | 50 | (Optional) Limit the amount of funding data returned. Must be >= 1


## Symbols
```javascript
xchange.bitfinex.symbols(null, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
[
  "btcusd",
  "ltcusd",
  "ltcbtc",
  ...
]
```
Get a list of available symbol names.


Parameter | Default | Description
--------- | ------- | -----------
None


## Symbols Details
```javascript
xchange.bitfinex.symbolsDetails(null, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
[
  {
    "pair": "btcusd",
    "price_precision": 5,
    "initial_margin": "30.0",
    "minimum_margin": "15.0",
    "maximum_order_size": "2000.0",
    "minimum_order_size": "0.01",
    "expiration": "NA"
  }, 
  {
    "pair": "ltcusd",
    "price_precision": 5,
    "initial_margin": "30.0",
    "minimum_margin": "15.0",
    "maximum_order_size": "5000.0",
    "minimum_order_size": "0.1",
    "expiration": "NA"
  }, 
  {
    "pair": "ltcbtc",
    "price_precision": 5,
    "initial_margin": "30.0",
    "minimum_margin": "15.0",
    "maximum_order_size": "5000.0",
    "minimum_order_size": "0.1",
    "expiration": "NA"
  },
  ...
]
```
Get a list of symbol ID's and pair details.


Parameter | Default | Description
--------- | ------- | -----------
None


# Bitstamp
**Bitstamp API**  

```javascript
import xchange from 'xchange';

xchange.bitstamp[method](params)
```
Uses bitstamp exchange API's [found here](https://www.bitstamp.net/api/)


## Ticker  
```javascript
xchange.bitstamp.ticker({currencyPair: 'btcusd'}, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "high": "1192.50",
  "last": "1181.40",
  "timestamp": "1492456833",
  bid": "1178.55",
  "vwap": "1178.25",
  "volume": "3300.97957797",
  "low": "1161.00",
  "ask": "1181.39",
  "open": "1162.31"
}
```
Get Ticker price


Parameter | Default | Description
--------- | ------- | -----------
currencyPair | - | the currency pair to retrieve data for


## Hourly Ticker  
```javascript
xchange.bitstamp.hourlyTicker({currencyPair: 'btcusd'}, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
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
```
Get Hourly Ticker


Parameter | Default | Description
--------- | ------- | -----------
currencyPair | - | the currency pair to retrieve data for


## Order Book  
```javascript
xchange.bitstamp.orderBook({currencyPair: 'btcusd'}, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "timestamp": "1492457113",
  "bids": [
    [
      "1179.29",
      "0.39000000"
    ],
    [
      "1179.21",
      "15.85206426"
    ],
    ...
  ],
  "asks": [
    [
      "1180.37",
      "0.12000000"
    ],
    [
      "1181.40",
      "5.72200166"
    ],
    ...
  ]
}
```
Get Order Book


Parameter | Default | Description
--------- | ------- | -----------
currencyPair | - | the currency pair to retrieve data for


## Transactions  
```javascript
const params = {
  currencyPair: 'btcusd',
  time: 'hour'
}

xchange.bitstamp.transactions(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
[
  {
    "date": "1492457365",
    "tid": "14208001",
    "price": "1180.36",
    "type": "0",
    "amount": "0.22949836"
  },
  {
    "date": "1492457343",
    "tid": "14207999",
    "price": "1178.67",
    "type": "1",
    "amount": "3.00000000"
  },
  ...
]
```
Get Transactions


Parameter | Default | Description
--------- | ------- | -----------
currencyPair | - | the currency pair to retrieve data for
time | hour | time interval for transactions, possible values are 'minute', 'hour', 'day'


# BTC-E
**BTC-E API**  

```javascript
import xchange from 'xchange';

xchange.btce[method](params)
```
Uses BTC-E exchange API's [found here](https://btc-e.com/api/3/docs)


## Info  
```javascript
xchange.btce.info({currencyPair: 'btc_usd'}, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
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
    ...
  }
}
```
Get info.  This method provides all the information about currently active pairs, such as the maximum number of digits after the decimal point, the minimum price, the maximum price, the minimum transaction size, whether the pair is hidden, the commission for each pair.


Parameter | Default | Description
--------- | ------- | -----------
currencyPair | - | the currency pair to retrieve data for


## Ticker  
```javascript
xchange.btce.ticker({currencyPair: 'btc_usd'}, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "btc_usd": {
    "high": 1241.987,
    "low": 1215.5,
    "avg": 1228.7435,
    "vol": 5842305.3252,
    "vol_cur": 4736.91428,
    "last": 1235.22,
    "buy": 1240,
    "sell": 1235.221,
    "updated": 1493005768
  },
  ...
}
```
Get Ticker.  This method provides all the information about currently active pairs, such as: the maximum price, the minimum price, average price, trade volume, trade volume in currency, the last trade, Buy and Sell price. All information is provided over the past 24 hours.


Parameter | Default | Description
--------- | ------- | -----------
currencyPair | - | the currency pair to retrieve data for


## Depth  
```javascript
const params = {
  currencyPair: 'btc_usd',
  limit: 5
}
  
xchange.btce.depth(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "btc_usd": {
    "asks": [
      [1240.476, 1.0708589],
      ...
    ],
    "bids": [
      [1236.077, 1.09385775],
      ...
    ]
  },
  ...
}
```
Get Depth.  This method provides the information about active orders on the pair.


Parameter | Default | Description
--------- | ------- | -----------
currencyPair | - | the currency pair to retrieve data for
limit | 150 | (Optional) indicates how many orders should be displayed. Must be less than 500


## Trades  
```javascript
const params = {
  currencyPair: 'btc_usd',
  limit: 5
}
  
xchange.btce.trades(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "btc_usd": {
    "asks": [
      [1240.476, 1.0708589],
      ...
    ],
    "bids": [
      [1236.077, 1.09385775],
      ...
    ]
  }
}
```
Get Trades.  This method provides the information about the last trades.


Parameter | Default | Description
--------- | ------- | -----------
currencyPair | - | the currency pair to retrieve data for
limit | 150 | (Optional) indicates how many orders should be displayed. Must be less than 500


# Coinbase
**Coinbase API**  

```javascript
import xchange from 'xchange';

xchange.coinbase[method](params)
```
Uses Coinbase exchange API's [found here](https://developers.coinbase.com/api/v2#data-endpoints)


## Currencies  
```javascript
xchange.coinbase.currencies(null, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "data": [
    {
      "id": "AED",
      "name": "United Arab Emirates Dirham",
      "min_size": "0.01000000"
    },
    {
      "id": "AFN",
      "name": "Afghan Afghani",
      "min_size": "0.01000000"
    }
  ]
}
```
List known currencies


Parameter | Default | Description
--------- | ------- | -----------
None


## Exchange Rates  
```javascript
xchange.coinbase.exchangeRates(null, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "data": {
    "currency": "BTC",
    "rates": {
      "AED": "36.73",
      "AFN": "589.50",
    }
  }
}
```
Get exchange rates for btc to different currencies


Parameter | Default | Description
--------- | ------- | -----------
None


## Buy Price  
```javascript
xchange.coinbase.buyPrice({currencyPair: 'BTC-USD'}, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "data": {
    "amount": "1020.25",
    "currency": "USD"
  }
}
```
Get the total price to buy one bitcoin or ether.


Parameter | Default | Description
--------- | ------- | -----------
currencyPair | | the currency for the exchange rate


## Sell Price  
```javascript
xchange.coinbase.sellPrice({currencyPair: 'BTC-USD'}, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "data": {
    "amount": "1010.25",
    "currency": "USD"
  }
}
```
Get the total price to sell one bitcoin or ether.


Parameter | Default | Description
--------- | ------- | -----------
currencyPair | | the currency for the exchange rate


## Spot Price  
```javascript
xchange.coinbase.spotPrice({currencyPair: 'BTC-USD'}, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "data": {
    "amount": "1010.25",
    "currency": "USD"
  }
}
```
Get the spot price of one bitcoin or ether.


Parameter | Default | Description
--------- | ------- | -----------
currencyPair | | the currency for the exchange rate


## Time  
```javascript
xchange.coinbase.time(null, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "data": {
    "amount": "1010.25",
    "currency": "USD"
  }
}
```
Get the API server time.


Parameter | Default | Description
--------- | ------- | -----------
none


# Kraken
**Kraken API**  

```javascript
import xchange from 'xchange';

xchange.kraken[method](params)
```
Uses Kraken exchange API's [found here](https://www.kraken.com/help/api)


## Server Time  
```javascript
xchange.kraken.serverTime(null, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "error": [],
  "error": [],
  "result": {
    "unixtime": 1491077507,
    "rfc1123": "Sat,  1 Apr 17 20:11:47 +0000"
  }
}
```
Get Server Time.  This is to aid in approximating the skew time between the server and client.


Parameter | Default | Description
--------- | ------- | -----------
None


## Assets  
```javascript
const params = {
  info: 'info',
  aclass: 'currency',
  asset: ['DASH', 'USDT']
}

xchange.kraken.assets(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "error": [],
  "result": {
    "DASH": {
      "aclass": "currency",
      "altname": "DASH",
      "decimals": 10,
      "display_decimals": 5
    },
    "USDT": {
      "aclass": "currency",
      "altname": "USDT",
      "decimals": 8,
      "display_decimals": 4
    }
  }
}
```
Get asset names and their info.


Parameter | Default | Description
--------- | ------- | -----------
info | info | (Optional) info to retrieve. Valid inputs = 'info'
aclass | currency | (Optional) asset class
asset | all | (Optional) Array of assets to get info on


## Asset Pairs  
```javascript
const params = {
  info: 'info',
  pair: ['USDTZUSD', 'DASHUSD']
}

xchange.kraken.assetPairs(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
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
    ...
  }
}
```
Get asset pairs and their info.


Parameter | Default | Description
--------- | ------- | -----------
info | info | (Optional) info to retrieve. Valid inputs = 'info', 'leverage', 'fees', or 'margin'
pair | all | (Optional) Array of assetPairs to get info on (ex: ['USDTZUSD', 'DASHUSD'])


## OHLC  
```javascript
const params = {
  pair: 'USDTZUSD',
  interval: 5,
  since: 1491269700
}

xchange.kraken.ohlc(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
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
      ],
      ...
    ],
    "last": 1491269700
  }
}
```
Get pair names and OHLC data


Parameter | Default | Description
--------- | ------- | -----------
pair | all | (Optional) asset pair to get OHLC data for
interval | 1 | (Optional) time frame interval in minutes  
since | - | (Optional - exclusive) return trade data since given id


## Order Book  
```javascript
const params = {
  pair: 'USDTZUSD',
  count: 5
}

xchange.kraken.orderBook(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
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
```
Get Order Book.  Array of pair name and market depth


Parameter | Default | Description
--------- | ------- | -----------
pair | all | (Optional) asset pair to get OHLC data for
count | - | (Optional) maximum number of asks/bids (optional)  


## Recent Trades  
```javascript
const params = {
  pair: 'USDTZUSD',
  since: 1491269156362842889
}

xchange.kraken.recentTrades(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
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
      ...
    ],
    "last": "1491269156362842889"
  }
}
```
Get Recent Trades.  Array of pair name and recent trade data


Parameter | Default | Description
--------- | ------- | -----------
pair | all | (Optional) asset pair to get info on (ex: 'USDTZUSD')
since | - | (Optional - exclusive) return trade data since given id  


## Recent Spread  
```javascript
const params = {
  pair: 'USDTZUSD',
  since: 1491269156362842889
}

xchange.kraken.recentSpread(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
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
      ],
      ...
    ],
    "last": 1491271114
  }
}
```
Get Recent Spread.  Array of pair name and recent trade data


Parameter | Default | Description
--------- | ------- | -----------
pair | all | (Optional) asset pairs to get info on (ex: 'USDTZUSD')
since | - | (Optional - exclusive) return trade data since given id  


# OkCoin
**OkCoin API**  

```javascript
import xchange from 'xchange';

xchange.okcoin[method](params)
```
Uses OkCoin exchange API's [found here](https://www.okcoin.com/about/rest_api.do)


## Ticker  
```javascript
xchange.okcoin.ticker({symbol: 'ltc_usd'}, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
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
```
Get ticker price.


Parameter | Default | Description
--------- | ------- | -----------
symbol | btc_usd | (Optional) the currency pair to retrieve data for.  Either btc_usd or ltc_usd


## Depth  
```javascript
const params = {
  symbol: 'ltc_usd',
  size: 3,
  merge: 1
  
}

xchange.okcoin.depth(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "asks": [
    [28.13,7.99],
    [28.08,2],
    [28.07,4.866]
  ],
  "bids":[
    [27.97,27.168],
    [27.93,5],
    [27.92,2]
  ]
}
```
Get market bid/ask depth.


Parameter | Default | Description
--------- | ------- | -----------
symbol | btc_usd | (Optional) the currency pair to retrieve data for.  Either btc_usd or ltc_usd
size | 200 | (Optional) market depth (1-200)
merge | - | (Optional) the merge depth  1, 0.1 


## Trades  
```javascript
const params = {
  symbol: 'ltc_usd',
  since: 49161630
}

xchange.okcoin.trades(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
[
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
  },
  ...
]
```
Get recent trades data.


Parameter | Default | Description
--------- | ------- | -----------
symbol | btc_usd | (Optional) the currency pair to retrieve data for.  Either btc_usd or ltc_usd
since | - | (Optional) get recently 600 pieces of data starting from the given tid (tid = epoch millisec)


## Kline  
```javascript
const params = {
  symbol: 'ltc_usd',
  type: '30min',
  size: 3,
  since: 1417536000000
}

xchange.okcoin.kline(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
[
  [1492981200000, 14.55, 14.83, 14.247, 14.341, 18348.988],
  [1492983000000, 14.351, 14.8, 14.322, 14.48, 22461.64],
  [1492984800000, 14.444, 14.7, 14.444, 14.664, 10452.874]
]
```
Get Kline data - approximately 2000 pieces of data are returned each cycle.


Parameter | Default | Description
--------- | ------- | -----------
symbol | - | the currency pair to retrieve data for.  Either btc_usd or ltc_usd
type | - | candlestick data type - (1min, 3min, 5min, 15min, 30min, 1day, 3day, 1week, 1hour, 2hour, 4hour, 6hour, 12hour)
size | - | (Optional) data size
since | - | (Optional) get recently 600 pieces of data starting from the given tid (tid = epoch millisec)


## Futures Ticker  
```javascript
const params = {
  symbol: 'ltc_usd',
  contractType: 'this_week'
}

xchange.okcoin.futureTicker(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
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
```
Get futures ticker


Parameter | Default | Description
--------- | ------- | -----------
symbol | - | the currency pair to retrieve data for.  Either btc_usd or ltc_usd
contractType | - | selection of one of following (this_week, next_week, quarter) 


## Futures Depth  
```javascript
const params = {
  symbol: 'ltc_usd',
  contractType: 'this_week',
  size: 1, 
  merge: 1
}

xchange.okcoin.futureTicker(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
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
```
Get futures bid/ask market depth


Parameter | Default | Description
--------- | ------- | -----------
symbol | - | the currency pair to retrieve data for.  Either btc_usd or ltc_usd
contractType | - | selection of one of following (this_week, next_week, quarter)
size | 200 | (Optional) size must be between 5-200
merge | - | (Optional) the merge depth  1, 0.1 


## Futures Trades  
```javascript
const params = {
  symbol: 'ltc_usd',
  contractType: 'this_week'
}

xchange.okcoin.futureTrades(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
[
  {
    "amount": 10,
    "date": 1492987375,
    "date_ms": 1492987375135,
    "price": 11.52,
    "tid": 148263643,
    "type": "sell"
  }, {
    "amount": 46,
    "date": 1492987391,
    "date_ms": 1492987391505,
    "price": 11.52,
    "tid": 148263773,
    "type": "sell"
  },
  ...
]
```
Get recent futures trades data


Parameter | Default | Description
--------- | ------- | -----------
symbol | - | the currency pair to retrieve data for.  Either btc_usd or ltc_usd
contractType | - | selection of one of following (this_week, next_week, quarter)


## Futures Index  
```javascript
const params = {
  symbol: 'ltc_usd'
}

xchange.okcoin.futureIndex(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{ "future_index": 11.564 }
```
Get futures index current price


Parameter | Default | Description
--------- | ------- | -----------
symbol | - | the currency pair to retrieve data for.  Either btc_usd or ltc_usd


## Exchange Rate  
```javascript
xchange.okcoin.exchangeRate(null, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{ "rate": 6.8867 }
```
Get exchange rate used by OkCoin (updated weekly)


Parameter | Default | Description
--------- | ------- | -----------
-


## Futures Estimated Price  
```javascript
xchange.okcoin.futureEstimatedPrice(null, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{ "forecast_price": 5.4 }
```
Get futures estimated price (only available within 3 hrs before delivery or settlement)


Parameter | Default | Description
--------- | ------- | -----------
symbol | - | the currency pair to retrieve data for.  Either btc_usd or ltc_usd


## Futures Kline  
```javascript
const params = {
  symbol: 'ltc_usd',
  type: '30min',
  contractType: 'this_week',
  size: 3,
  since: 1417536000000
}

xchange.okcoin.futureKline(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
[
  [1492984800000, 11.762, 11.9, 11.61, 11.64, 16328.0, 13866.561123590936], 
  [1492986600000, 11.648, 11.649, 11.4, 11.41, 15568.0, 13535.306350543768],
  [1492988400000, 11.41, 11.48, 11.399, 11.419, 8322.0, 7281.685938501471]
]
```
Get Futures Kline data


Parameter | Default | Description
--------- | ------- | -----------
symbol | - | the currency pair to retrieve data for.  Either btc_usd or ltc_usd
type | - | candlestick data type - (1min, 3min, 5min, 15min, 30min, 1day, 3day, 1week, 1hour, 2hour, 4hour, 6hour, 12hour)
contractType | - | selection of one of following (this_week, next_week, quarter)
size | - | (Optional) data size
since | - | (Optional) data after the timestamp will be returned


## Futures Hold Amount  
```javascript
const params = {
  symbol: 'ltc_usd',
  contractType: 'this_week'
}

xchange.okcoin.futureHoldAmount(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
[
  {
    "amount": 71530,
    "contract_name": "LTC0428"
  }
]
```
Get futures hold amount data


Parameter | Default | Description
--------- | ------- | -----------
symbol | - | the currency pair to retrieve data for.  Either btc_usd or ltc_usd
contractType | - | selection of one of following (this_week, next_week, quarter)


## Futures Price Limit  
```javascript
const params = {
  symbol: 'ltc_usd',
  contractType: 'this_week'
}

xchange.okcoin.futurePriceLimit(params, (err, response) => {
  if (!err) {
    console.log(response);
  }
});


// example response
{
  "high": 12.014,
  "low": 11.126
}
```
Get futures price limit


Parameter | Default | Description
--------- | ------- | -----------
symbol | - | the currency pair to retrieve data for.  Either btc_usd or ltc_usd
contractType | - | selection of one of following (this_week, next_week, quarter)


