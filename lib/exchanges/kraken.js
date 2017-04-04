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

export default function (config) {
    const urls = config.kraken;

    return {
        serverTime: (cb) => {
            const req = request
                .get(urls.serverTime)
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
                .get(urls.assets)
                .set(userAgent)

            return parseResponse(req, cb);
        },

        assetPairs: (cb) => {
            const req = request
                .get(urls.assetPairs)
                .set(userAgent)

            return parseResponse(req, cb);
        },

        ohlc: (data, cb) => {
            const req = request
                .post(urls.ohlc)
                .send(data)
                .set(userAgent)

            return parseResponse(req, cb);
        },

        orderBook: (data, cb) => {
            const req = request
                .post(urls.orderBook)
                .send(data)
                .set(userAgent)

            return parseResponse(req, cb);
        },

        recentTrades: (data, cb) => {
            const req = request
                .post(urls.recentTrades)
                .send(data)
                .set(userAgent)

            return parseResponse(req, cb);
        },

        recentSpread: (data, cb) => {
            const req = request
                .post(urls.recentSpread)
                .send(data)
                .set(userAgent)

            return parseResponse(req, cb);
        },

    }
}
