/**
 * Retrieve the spot price from bitfinex, bitstamp, okcoin 
 */

"use strict";

var xchange = require("../dist/xchange");

//prints bitfinex spot price
xchange.btc38.ticker(function(error, resp){
	if(!error){
		console.log(resp);
	}
});
