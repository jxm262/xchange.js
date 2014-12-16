'use strict';

var request = require('request');

function Bitstamp() {
	this.request = request;
};

function Coinbase() {
	this.request = request;
};

function Bitfinex() {
	this.request = request;
};

Bitstamp.prototype.getTicker = function(callback) {
	request('https://www.bitstamp.net/api/ticker/', function(error, response, body) {
		if (error) {
			callback(error);
		} else {
			callback(null, response, body);
		}
	});
};

Coinbase.prototype.getTicker = function(callback) {
	request('https://api.coinbase.com/v1/prices/spot_rate', function(error, response, body) {
		if (error) {
			callback(error);
		} else {
			callback(null, response, body);
		}
	});
};

Bitfinex.prototype.getTicker = function(callback) {
	request('https://api.bitfinex.com/v1/pubticker/btcusd', function(error, response, body) {
		if (error) {
			callback(error);
		} else {
			callback(null, response, body);
		}
	});
};

exports.bitstamp = new Bitstamp();
exports.coinbase = new Coinbase();
exports.bitfinex = new Bitfinex();
