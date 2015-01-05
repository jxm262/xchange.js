/**
 * Used to decorate the different exchange"s JSON response
 */

"use strict";

function ApiDecorator(){
	this.ApiDecorator = ApiDecorator;
}

//todo: look to see if there"s some exising library that can already do this
var flattenObject = function(ob) {
	var toReturn = {};
	
	for (var i in ob) {
		if (!ob.hasOwnProperty(i)) {
			continue;
		}
		
		if ((typeof ob[i]) === "object" && ob[i] !== null) {
			var flatObject = flattenObject(ob[i]);
			for (var x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) {
					continue;
				}
				
				toReturn[i + "." + x] = flatObject[x];
			}
		} else {
			toReturn[i] = ob[i];
		}
	}
	return toReturn;
};

ApiDecorator.prototype.spotPrice = function(jsonBody, jsonSchema) {
	var bodyFlattened = flattenObject(jsonBody);
	
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
		decoratedJson[mappedKey] = bodyFlattened[key];
	}
	
	return decoratedJson;
},

module.exports = new ApiDecorator();