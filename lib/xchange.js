"use strict";

var apis = require("../apis/apis.js")
	,decorator = require("./apidecorator.js")
	,request = require("request");

function Xchange() {
	this.addApis(apis);
	this.Xchange = Xchange;
}

function requestOptions(url) {
	return {
		url : url,
		headers : {
			"User-Agent" : "Mozilla/4.0"
		}
	};
}

function buildSpotPriceApi(exchange) {
	return function(callback) {
		request.get(requestOptions(exchange.tickerUrl), function(error,
				response, body) {
			if (error) {
				callback(error);
			} else if (response.statusCode !== 200) {
				callback("response.statusCode = " + response.statusCode);
			} else {
				callback(null, decorator.spotPrice(JSON.parse(body), exchange.jsonSchema));
			}
		});
	};
}

Xchange.prototype.addApis = function(apis) {
	for ( var apiName in apis) {
		this[apiName] = {
			"ticker" : buildSpotPriceApi(apis[apiName])
		};
	}
};

module.exports = new Xchange();
