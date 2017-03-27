/**
 * Used to decorate the different exchange"s JSON response
 */

import tickerResponse from './response/ticker';

function ResponseDecorator() {
	this.ResponseDecorator = ResponseDecorator;
}

// TODO: look to see if there"s some exising library that can already do this, similar to flatten() in scala.
// Or even better something that flattens and filters , sort of like flatten().filter(x => ..)
function flattenObject(ob) {
	return Object.entries(ob).reduce((accum, el) => {
		const [key, entry] = el;

		if (typeof entry === 'object' && entry !== null) {
			const flatObject = Object.entries(flattenObject(entry));

			flatObject.forEach((flattenedEntry) => {
				const [fkey, fentry] = flattenedEntry;
				accum[`${key}.${fkey}`] = fentry;
			});
		} else {
			accum[key] = entry;
		}

		return accum;
	}, {});
}

ResponseDecorator.prototype.ticker = function(jsonBody, jsonSchema) {
	let resp = new tickerResponse();
	const bodyFlattened = flattenObject(jsonBody);
	
	for(let key in jsonSchema){
		const mappedKey = jsonSchema[key];
		resp[mappedKey] = parseFloat(bodyFlattened[key]);
	}
	
	return resp;
},

module.exports = new ResponseDecorator();