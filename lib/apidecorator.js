/**
 * Used to decorate the different exchange's JSON response
 */

'use strict';

function ApiDecorator(){
	this.ApiDecorator = ApiDecorator;
};

ApiDecorator.prototype.spotPrice = function(jsonBody, jsonSchema) {
	
	var decoratedJson = {
		"bid" : "",
		"ask" : "",
		"low" : "",
		"high" : "",
		"volume" : "",
		"timestamp" : ""
	};

	for(var key in jsonSchema){
		var mappedKey = jsonSchema[key];
		decoratedJson[mappedKey] = jsonBody[key];
	};
	
	return decoratedJson;
},

module.exports = new ApiDecorator();