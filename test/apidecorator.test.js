'use strict';

var decorator = require("../response_decorator/response-decorator.js")
	,request = require("request")
	,assert = require("assert")
	,chai = require("chai")
	,sinon = require("sinon")
	,sinonChai = require('sinon-chai')
	,should = chai.should()
	,expect = chai.expect;

chai.use(sinonChai);

describe("decorator.js", function(){
	
	it("ticker converts exchange's response into the decorated spot price response", function(){
		var resp = 
			{
				"result" : "true",
				"last" : 311,
				"high" : 314.352,
				"low" : 311,
				"avg" : 311.597,
				"sell" : 314.29,
				"buy" : 311,
				"vol_btc" : 0.1252,
				"vol_usd" : 39.012
			};
		
		var jsonSchema = 
			{
				"buy" : "bid",
				"sell" : "ask",
				"low" : "low",
				"high" : "high",
				"vol_usd" : "volume"
			};
		
		decorator.ticker(resp, jsonSchema).should.deep.equal(
				{
					"bid" : 311,
					"ask" : 314.29,
					"low": 311,
					"high" : 314.352,
					"volume" : 39.012,
					"timestamp" : 0
				}
		);
	});
	
	it("ticker converts exchange's response (nested) into the decorated spot price response", function(){
		var resp = 
			{"ticker" : 
				{
					"result" : "true",
					"last" : 311,
					"high" : 314.352,
					"low" : 311,
					"avg" : 311.597,
					"sell" : 314.29,
					"buy" : 311,
					"vol_btc" : 0.1252,
					"vol_usd" : 39.012
				}
			}
		
		var jsonSchema = 
			{
				"ticker.buy" : "bid",
				"ticker.sell" : "ask",
				"ticker.low" : "low",
				"ticker.high" : "high",
				"ticker.vol_usd" : "volume"
			};
		
		decorator.ticker(resp, jsonSchema).should.deep.equal(
				{
					"bid" : 311,
					"ask" : 314.29,
					"low": 311,
					"high" : 314.352,
					"volume" : 39.012,
					"timestamp" : 0
				}
		);
	});	
});