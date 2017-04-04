import request from 'superagent';

const userAgent = {'User-Agent': 'xchange.js'};

export default function (config) {
    const urls = config.kraken;

    return {
        serverTime: (cb) => {
            const req = request
                .get(urls.serverTime)
                .set(userAgent)

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
        },

        assets: (cb) => {
            const req = request
                .get(urls.assets)
                .set(userAgent)

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
        },

        assetPairs: (cb) => {
            const req = request
                .get(urls.assetPairs)
                .set(userAgent)

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
        },

        ohlc: (data, cb) => {
            const req = request
                .post(urls.ohlc)
                .send(data)
                .set(userAgent)

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
    }
}
