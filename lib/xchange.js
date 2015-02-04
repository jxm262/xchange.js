"use strict";

var apis = require("../apis/apis"),
    decorator = require("../response_decorator/response-decorator"),
    request = require("superagent");

function Xchange() {
    this.addApis(apis);
}

function requestOptions() {
    return {
        "User-Agent": "xchange.js"
    };
}

function buildTickerApi(exchange) {
    return function (callback) {
        request
            .get(exchange.tickerUrl)
            .set(requestOptions())
            .end(function (response) {
                if (response.error) {
                    callback(response.error);
                } else if (response.statusCode !== 200) {
                    callback("response.statusCode = " + response.statusCode);
                } else {
                    callback(null, decorator.ticker(JSON.parse(JSON.stringify(response.body)), exchange.jsonSchema));
                }
            });
    };
}

Xchange.prototype.addApis = function (apis) {
    for (var apiName in apis) {
        this[apiName] = {
            "ticker": buildTickerApi(apis[apiName])
        };
    }
};

module.exports = new Xchange();
