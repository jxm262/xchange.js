'use strict';

var apis = require('../apis/apis.js')
	,assert = require("assert")
	,chai = require('chai')
	,sinon = require('sinon')
	,should = chai.should();

describe('apis.js', function(){
	it('should contain map of exchange names and corresponding REST api for the spot price', function(){
		apis.should.have.property("bitstamp", "https://www.bitstamp.net/api/ticker/");
		apis.should.have.property("coinbase", "https://api.coinbase.com/v1/prices/spot_rate");
		apis.should.have.property("bitfinex", "https://api.bitfinex.com/v1/pubticker/btcusd");
	});
});
