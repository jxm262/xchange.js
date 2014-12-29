'use strict';

var apis = require("../apis/apis.js");
var request = require('request');

function Xchange(){
	this.addApis(apis);
	this.Xchange = Xchange;
};

Xchange.prototype.addApis = function(apis) {
	for (var apiName in apis) {
		this[apiName] = buildSpotPriceApi(apis[apiName]);
	}
};
	
function buildSpotPriceApi(url){
	return function(callback){
		request.get(url, function(error, response, body){
			if(error) {
				callback(error);
			} else if (response.statusCode != 200){
				callback("response.statusCode = " + response.statusCode)
			} else {
				callback(null, body);
			}
		});
	};
};

module.exports = new Xchange();