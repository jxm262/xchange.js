xchange.js  [![Build Status](https://travis-ci.org/jxm262/xchange.js.svg?branch=master)](https://travis-ci.org/jxm262/xchange.js)  
==========  
  
  A Bitcoin spot price api.  Aggregates different alt-currency exchange api's into a convenient javascript wrapper.  



[![NPM](https://nodei.co/npm/xchange.js.png)](https://npmjs.org/package/xchange.js)  

  Note!!  This is highly in the Alpha stage.
  

## Installation

```
npm install xchange.js
```

To use, just require the module you'd like to work with and call the getTicker function with your own callback.  

<<<<<<< HEAD
Usage
=======
```  
//Example print the spot price from bitfinex  
=======
## Usage
+ base object is xchange.js  
+ exposes objects for each exchange (bitstamp, coinbase, etc.)  
+ contains asynchronous function:  
    getTicker(callback);    //where callback is uses callback(error, response, body)

```
var xchange = require('xchange.js');
>>>>>>> bcca80c42fa2a7e5b977b6fcfc946af69f7d5e83

var xchange = require('xchange.js');

<<<<<<< HEAD
=======
xchange.bitstamp.getTicker(function(error, response, body){
  if(error || response.statusCode != 200) {
     console.log('there was an error');
  }
>>>>>>> bcca80c42fa2a7e5b977b6fcfc946af69f7d5e83
  
xchange.bitfinex.ticker(function(error, resp){
	if(!error){
		console.log(resp);
	}
});
<<<<<<< HEAD
=======

xchange.coinbase.getTicker(function(error, response, body){
  if(error || response.statusCode != 200) {
     console.log('there was an error');
  }
>>>>>>> bcca80c42fa2a7e5b977b6fcfc946af69f7d5e83
  
  
```
  
  

To run tests (using mocha chai)
===============================  

```
npm test
```  
  

## To help work on xchange.js, you'll need to 
- have Node installed
- Then clone the repo  
- install dependencies

```
cd /some_directory
git clone https://github.com/jxm262/xchange.js
cd /some_directory/xchange.js
npm install
```  

About the Project
=================
We're currently in the process of figuring out what should be in the scope of this project and what tasks are being split up.  Please PM me if you'd like to get on the mailing list.
