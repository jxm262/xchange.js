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

export const rootUrl = 'https://api.kraken.com';

export const endpoints = {
    serverTime:     '/0/public/Time',
    assets:         '/0/public/Assets',
    assetPairs:     '/0/public/AssetPairs',
    ohlc:           '/0/public/OHLC',
    orderBook:      '/0/public/Depth',
    recentTrades:   '/0/public/Trades',
    recentSpread:   '/0/public/Spread',
};

export default {

    serverTime: (cb) => {
        const req = request
            .get(rootUrl + endpoints.serverTime)
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
            .get(rootUrl + endpoints.assets)
            .set(userAgent)

        return parseResponse(req, cb);
    },

    assetPairs: (cb) => {
        const req = request
            .get(rootUrl + endpoints.assetPairs)
            .set(userAgent)

        return parseResponse(req, cb);
    },

    ohlc: (data, cb) => {
        const req = request
            .post(rootUrl + endpoints.ohlc)
            .send(data)
            .set(userAgent)

        return parseResponse(req, cb);
    },

    orderBook: (data, cb) => {
        const req = request
            .post(rootUrl + endpoints.orderBook)
            .send(data)
            .set(userAgent)

        return parseResponse(req, cb);
    },

    recentTrades: (data, cb) => {
        const req = request
            .post(rootUrl + endpoints.recentTrades)
            .send(data)
            .set(userAgent)

        return parseResponse(req, cb);
    },

    recentSpread: (data, cb) => {
        const req = request
            .post(rootUrl + endpoints.recentSpread)
            .send(data)
            .set(userAgent)

        return parseResponse(req, cb);
    },
};
