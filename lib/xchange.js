"use strict";

var apis = require("../apis/apis.js")
	,decorator = require("../response_decorator/response-decorator.js")
	,request = require("request");

function Xchange() {
	this.addApis(apis);
}

function requestOptions(url) {
	return {
		url : url,
		headers : {
			"User-Agent" : "xchange.js"
		}
	};
}

function buildTickerApi(exchange) {
	return function(callback) {
		request.get(requestOptions(exchange.tickerUrl), function(error,
				response, body) {
			if (error) {
				callback(error);
			} else if (response.statusCode !== 200) {
				callback("response.statusCode = " + response.statusCode);
			} else {
				callback(null, decorator.ticker(JSON.parse(body), exchange.jsonSchema));
			}
		});
	};
}

Xchange.prototype.addApis = function(apis) {
	for ( var apiName in apis) {
		this[apiName] = {
			"ticker" : buildTickerApi(apis[apiName])
		};
	}
};

module.exports = new Xchange();
