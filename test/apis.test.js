"use strict";

var apis = require("../apis/apis.js")
	,assert = require("assert")
	,chai = require("chai")
	,sinon = require("sinon")
	,should = chai.should();

describe("apis.js", function(){
	it("should contain map of exchange objects", function(){
		apis.should.have.property("okcoin");
		apis.should.have.property("bitfinex");
		apis.should.have.property("bitstamp");
		apis.should.have.property("btce");
		apis.should.have.property("btc38");
		apis.should.have.property("bter");
		apis.should.have.property("hitbtc");
		apis.should.have.property("ccex");
	});
});

describe("exchange objects", function(){
	it("should contain tickerUrl String", function(){
		for(var obj in apis){
			apis[obj].tickerUrl.should.be.a("string");
		}
	});

	//is this part even worth testing?
	it("should contain a jsonSchema definition", function(){
		for(var obj in apis){
			var jsonSchema = apis[obj].jsonSchema;
			jsonSchema.should.be.an("object");
			
			for(var key in jsonSchema){
				jsonSchema[key].should.be.a("string");
			}
		}
	});
});