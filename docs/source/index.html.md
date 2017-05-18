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




# Coinbase
**Coinbase API**  
```javascript
import xchange from 'xchange';

xchange.coinbase[method](params)
```
Follows similar documentation to original api [found here](https://developers.coinbase.com/api/v2#data-endpoints)


## Currencies  
```javascript
coinbase.currencies(null, (err, response) => {
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
coinbase.exchangeRate(null, (err, response) => {
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
coinbase.buyPrice({currencyPair: 'BTC-USD'}, (err, response) => {
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



# Authentication

> To authorize, use this code:

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
```

> Make sure to replace `meowmeowmeow` with your API key.

Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our [developer portal](http://example.com/developers).

Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

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

