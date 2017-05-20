---
title: API Reference


toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true
---

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
Aggregates different Bitcoin exchanges api's into a convenient JS wrapper.  

- Works both on the Client or Server
- Can use either Callbacks or Promises (es6)  
- Currently supports 6 different exchanges (with more to come)
   - Bitfinex
   - Bitstamp
   - Coinbase
   - BTC-e
   - Kraken
   - OkCoin


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
  //response
});
```

> Example Response

```javascript
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
  //response
});
```

> Example Response

```javascript
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
  //response
});
```

> Example Response

```javascript
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
  //response
});
```

> Example Response

```javascript
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
  //response
});
```

> Example Response

```javascript
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
  //response
});
```

> Example Response

```javascript
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
  //response
});
```

> Example Response

```javascript
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
  //response
});
```

> Example Response

```javascript
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
  //response
});
```

> Example Response

```javascript
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
  //response
});
```

> Example Response

```javascript
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
  //response
});
```

> Example Response

```javascript
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
  //response
});
```

> Example Response

```javascript
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


# Coinbase
**Coinbase API**  

```javascript
import xchange from 'xchange';

xchange.coinbase[method](params)
```
Follows similar documentation to original api [found here](https://developers.coinbase.com/api/v2#data-endpoints)


## Currencies  
```javascript
xchange.coinbase.currencies(null, (err, response) => {
  //response
});
```

> Example Response

```javascript
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


## Exchange Rate  
```javascript
xchange.coinbase.exchangeRate(null, (err, response) => {
  //response
});
```

> Example Response

```javascript
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
  //response
});
```

> Example Response

```javascript
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
  //response
});
```

> Example Response

```javascript
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
  //response
});
```

> Example Response

```javascript
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
  //response
});
```

> Example Response

```javascript
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






`Authorization: meowmeowmeow`

<aside class="notice">
You must replace <code>meowmeowmeow</code> with your personal API key.
</aside>

# Kittens

## Get All Kittens

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```shell
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let kittens = api.kittens.get();
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get(2)
```

```shell
curl "http://example.com/api/kittens/2"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.kittens.get(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Max",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific kitten.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve

