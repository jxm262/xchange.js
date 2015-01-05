/**
 * List of exchanges and corresponding REST url to retrieve current price
 */

module.exports = {
	"bitfinex" : {
		"tickerUrl" : "https://api.bitfinex.com/v1/pubticker/btcusd",
		"jsonSchema" : {
			"bid" : "bid",
			"ask" : "ask",
			"low" : "low",
			"high" : "high",
			"volume" : "volume",
			"timestamp" : "timestamp"
		}
	},
	"bitstamp" : {
		"tickerUrl" : "https://www.bitstamp.net/api/ticker/",
		"jsonSchema" : {
			"bid" : "bid",
			"ask" : "ask",
			"low" : "low",
			"high" : "high",
			"volume" : "volume",
			"timestamp" : "timestamp"
		}
	},
	"okcoin" : {
		"tickerUrl" : "https://www.okcoin.com/api/ticker.do?ok=1",
		"jsonSchema" : {
			"ticker.buy" : "bid",
			"ticker.sell" : "ask",
			"ticker.low" : "low",
			"ticker.high" : "high",
			"ticker.vol" : "volume",
			"date" : "timestamp"
		}
	},
	"btce" : {
		"tickerUrl" : "https://btc-e.com/api/3/ticker/btc_usd",
		"jsonSchema" : {
			"btc_usd.buy" : "bid",
			"btc_usd.sell" : "ask",
			"btc_usd.low" : "low",
			"btc_usd.high" : "high",
			"btc_usd.vol" : "volume",
			"btc_usd.updated" : "timestamp"
		}
	},
	"btc38" : {
		"tickerUrl" : "http://api.btc38.com/v1/ticker.php?c=btc",
		"jsonSchema" : {
			"ticker.buy" : "bid",
			"ticker.sell" : "ask",
			"ticker.low" : "low",
			"ticker.high" : "high",
			"ticker.vol" : "volume"
		}
	},
	"bter" : {
		"tickerUrl" : "http://data.bter.com/api/1/ticker/btc_usd",
		"jsonSchema" : {
			"buy" : "bid",
			"sell" : "ask",
			"low" : "low",
			"high" : "high",
			"vol_usd" : "volume"
		}
	},
	"hitbtc" : {
		"tickerUrl" : "http://api.hitbtc.com/api/1/public/BTCUSD/ticker",
		"jsonSchema" : {
			"bid" : "bid",
			"ask" : "ask",
			"low" : "low",
			"high" : "high",
			"volume" : "volume",
			"timestamp" : "timestamp"
		}
	},
	"ccex" : {
		"tickerUrl" : "https://c-cex.com/t/btc-usd.json",
		"jsonSchema" : {
			"ticker.buy" : "bid",
			"ticker.sell" : "ask",
			"ticker.low" : "low",
			"ticker.high" : "high"
		}
	}
}
