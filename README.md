xchange.js  [![Build Status](https://travis-ci.org/jxm262/xchange.js.svg?branch=master)](https://travis-ci.org/jxm262/xchange.js)  
==========  

Note!!  This is highly in the Alpha stage.  

  
  
Bitcoin and Altcoin spot price  api.  Aggregates different exchanges api's into a convenient wrapper.


To use, just import the module and provide your own callback to the ticker function for a given exchange.  

Usage
=======
```  
//Example print the spot price from bitfinex  

var xchange = require('xchange.js');

  
xchange.bitfinex.ticker(function(error, resp){
	if(!error){
		console.log(resp);
	}
});
```
  
  
Working on xchange.js
=====================

To help work on xchange.js, you'll need to 
- have Node installed.  
- Then clone the repo  
- install dependencies  

```
git clone https://github.com/jxm262/xchange.js.git
cd xchange.js
npm install
```
  

## To run tests (using mocha chai)

```
npm test
```  
  
  
About the Project
=================
We're currently in the process of figuring out what should be in the scope of this project and what tasks are being split up.  Please PM me if you'd like to get on the mailing list.
