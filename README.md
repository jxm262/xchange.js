xchange.js  [![Build Status](https://travis-ci.org/jxm262/xchange.js.svg?branch=master)](https://travis-ci.org/jxm262/xchange.js)  
==========  

Aggregates different Bitcoin exchanges api's into a convenient JS wrapper.  


#### Documentation
[Full Documentation Found Here](https://jxm262.github.io/xchange.js/)


#### Motivation
Easily use _all_ of the api's of _every_ exchange in one single, simple to understand JavaScript module.  Bitcoin exchanges api's are frequently updated, often missing documentation, and occasionally confusing.  After writing lots of code to consume different api's, I realized the knowledge could/should be centralized into 1 module which addresses all of these pain-points.  Thus, xchange.js was born.  


#### Features
- Works both on the Client or Server
- Can use either Callbacks or Promises (es6)  
- Currently supports 6 different exchanges (with more to come)
   - Bitfinex
   - Bitstamp
   - Coinbase
   - BTC-e
   - Kraken
   - OkCoin
   

Installation
=======
```
npm install xchange.js
```

   
Code example
=======
```  
//Example print the spot price of BTC/USD from bitfinex  

var xchange = require('xchange.js');

  
xchange.bitfinex.ticker({symbol: 'BTCUSD'}, (err, response) => {
  if (!err) {
    console.log(response);
  }
});
```
  
  
## Contributors

To help make xchange.js better please

- install Node & NPM
- clone the repo
- install dependencies  


```
git clone https://github.com/jxm262/xchange.js.git
cd xchange.js
npm install
```
  
To keep with the latest news on xchange.js development feel free to [participate in the mailing list](https://groups.google.com/forum/#!forum/xchange)
  
## To run tests (using mocha chai)

```
npm test
```  
 
## License
MIT 

Please refer to the LICENSE file for details.
  
About the Project
=================
The end goal really is to wrap _every_ api for all exchanges into this project.  The current roadmap includes upgrading this to use authenticated api's, so users can perform actual transactions (buy, sell, etc..), and later to include more exchanges.  The concept very much follows the motivation of the popular Java [XChange](https://github.com/timmolter/XChange) library.
