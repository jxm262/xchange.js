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

        assets: (cb) => {
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
        }
    }
}
