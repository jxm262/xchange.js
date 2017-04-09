/**
 * API docs - https://www.kraken.com/help/api
 *
 */

import request from 'superagent';

const userAgent = {'User-Agent': 'xchange.js'};

function parseResponse(req, cb) {
    if (!cb) {
        return req
            .then((resp) => {
                return Promise.resolve(resp.body)
            })
            .catch((err) => {
                return Promise.reject(err)
            });
    }

    req.end((err, res) => {
        const response = (res) ? res.body : res;
        cb.apply(this, [err, response]);
    });
}

export const endpoints = {
    serverTime: 'https://api.kraken.com/0/public/Time',
    assets: 'https://api.kraken.com/0/public/Assets',
    assetPairs: 'https://api.kraken.com/0/public/AssetPairs',
    ohlc: 'https://api.kraken.com/0/public/OHLC',
    orderBook: 'https://api.kraken.com/0/public/Depth',
    recentTrades: 'https://api.kraken.com/0/public/Trades',
    recentSpread: 'https://api.kraken.com/0/public/Spread',
};

export default {

    serverTime: (cb) => {
        const req = request
            .get(endpoints.serverTime)
            .set(userAgent)

        return parseResponse(req, cb);
    },

    /**
     * @param {Object} [data]
     * @param {String} [data.info = all] info to retrieve
     * @param {String} [data.aclass = currency] asset class
     * @param {String} [data.asset = all] comma delimited list of assets to get info on
     * @param {function=} cb - node style callback
     */
    assets: (data, cb) => {
        const req = request
            .get(endpoints.assets)
            .set(userAgent)

        return parseResponse(req, cb);
    },

    assetPairs: (cb) => {
        const req = request
            .get(endpoints.assetPairs)
            .set(userAgent)

        return parseResponse(req, cb);
    },

    ohlc: (data, cb) => {
        const req = request
            .post(endpoints.ohlc)
            .send(data)
            .set(userAgent)

        return parseResponse(req, cb);
    },

    orderBook: (data, cb) => {
        const req = request
            .post(endpoints.orderBook)
            .send(data)
            .set(userAgent)

        return parseResponse(req, cb);
    },

    recentTrades: (data, cb) => {
        const req = request
            .post(endpoints.recentTrades)
            .send(data)
            .set(userAgent)

        return parseResponse(req, cb);
    },

    recentSpread: (data, cb) => {
        const req = request
            .post(endpoints.recentSpread)
            .send(data)
            .set(userAgent)

        return parseResponse(req, cb);
    },
};
