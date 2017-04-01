import request from 'superagent';
import apis from './apis';
import decorator from './response-decorator/response-decorator';

function Xchange() {
	this.addApis(apis);
}

function requestOptions() {
	return { 'User-Agent': 'xchange.js' };
}

function buildTickerApi(exchange) {
	return function (callback) {
		request
			.get(exchange.tickerUrl)
			.set(requestOptions())
			.end((response) => {
				if (response.error) {
					callback(response.error);
				} else if (response.statusCode !== 200) {
					callback(`response.statusCode = ${response.statusCode}`);
				} else {
					callback(null, decorator.ticker(JSON.parse(JSON.stringify(response.body)), exchange.jsonSchema));
				}
			});
	};
}

Xchange.prototype.addApis = function (xChangeApis) {
    Object.keys(xChangeApis).forEach((apiName) => {
        this[apiName] = { 'ticker': buildTickerApi(xChangeApis[apiName]) };
    });
};

module.exports = new Xchange();
