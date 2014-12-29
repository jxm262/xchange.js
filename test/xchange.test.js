/**
 * Todo: Note, these are actually integration tests. Need switched to true unit
 * tests after I read up on mocking and stubbing nested asynchronous calls.
 * 
 * my so question -
 * http://stackoverflow.com/questions/27462799/sinon-how-to-stub-nested-function
 * 
 * Also need to refactor how to validate json schema To follow up and read -
 * http://chaijs.com/plugins/chai-json-schema
 */

'use strict';

var xchange = require('../lib/xchange.js')
	,assert = require("assert")
	,chai = require('chai')
	,sinon = require('sinon')
	,should = chai.should()
	,expect = chai.expect;

var request = require('request');

describe('xchange library', function() {
	it('should have a bistamp object', function() {
		assert.equal(typeof xchange.bitstamp, 'object');
	});
});

describe('bitstamp object', function() {
	var bitstamp = xchange.bitstamp;

	it('should have a getTicker function', function() {
		assert.equal(typeof bitstamp.getTicker, 'function');
	});

	it('bitstamp ticker should return 200, contain bitstamp ticker json', function(done) {
		bitstamp.getTicker(function(error, response, body){
			var ticker = JSON.parse(body);

			response.statusCode.should.equal(200);
			ticker.should.have.property("high");
			ticker.should.have.property("last");
			ticker.should.have.property("timestamp");
			ticker.should.have.property("volume");
			ticker.should.have.property("low");
			ticker.should.have.property("ask");
			
			done();
		});
	});
});

describe('coinbase object', function() {
	var coinbase = xchange.coinbase;
	
	before(function() {
		sinon.stub(request, 'get').yields(null, JSON.stringify({price: '100 USD'}));
	});

	it('should have a getTicker function', function() {
		assert.equal(typeof coinbase.getTicker, 'function');
	});
	
	it('request.get() function should be called and the callback invoked', function(){
		var callback = sinon.spy();

		coinbase.getTicker(callback);
		
		request.get.should.have.been.called;
		callback.should.have.been.called;
	});
	
});

describe('bitfinex object', function() {
	var bitfinex = xchange.bitfinex;
	
	it('should have a getTicker function', function() {
		assert.equal(typeof bitfinex.getTicker, 'function');
	});
	
	it('coinbase ticker should return 200, contain coinbase ticker json', function(done) {
		bitfinex.getTicker(function(error, response, body){
			var ticker = JSON.parse(body);
			
			response.statusCode.should.equal(200);
			ticker.should.have.property("mid");
			ticker.should.have.property("bid");
			ticker.should.have.property("ask");
			ticker.should.have.property("last_price");
			ticker.should.have.property("low");
			ticker.should.have.property("high");
			ticker.should.have.property("volume");
			ticker.should.have.property("timestamp");
			
			done();
		});
	});
});
