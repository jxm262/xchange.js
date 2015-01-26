/**
 * Used to decorate the different exchange"s JSON response
 */

"use strict";

var tickerResponse = require("./response/ticker");

function ResponseDecorator(){
	this.ResponseDecorator = ResponseDecorator;
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

ResponseDecorator.prototype.ticker = function(jsonBody, jsonSchema) {
	var resp = new tickerResponse();
	var bodyFlattened = flattenObject(jsonBody);
	
	for(var key in jsonSchema){
		var mappedKey = jsonSchema[key];
		resp[mappedKey] = parseFloat(bodyFlattened[key]);
	}
	
	return resp;
},

module.exports = new ResponseDecorator();