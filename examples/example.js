/**
 * Retrieve the spot price from bitfinex, bitstamp, okcoin 
 */

"use strict";

var xchange = require("../lib/xchange.js");

//prints bitfinex spot price
xchange.bitfinex.ticker(function(error, resp){
	if(!error){
		console.log(resp);
	}
});
