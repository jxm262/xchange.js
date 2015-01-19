/**
 * Used to decorate the different exchange"s JSON response
 */

"use strict";

var tickerResponse = require("./response/ticker");

function ApiDecorator(){
	this.ApiDecorator = ApiDecorator;
}

//TODO: look to see if there"s some exising library that can already do this, similar to flatten() in scala.
//Or even better something that flattens and filters , sort of like flatten().filter(x => ..) 
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

	for(var key in jsonSchema){
		var mappedKey = jsonSchema[key];
		tickerResponse[mappedKey] = bodyFlattened[key];
	}
	
	return tickerResponse;
},

module.exports = new ApiDecorator();