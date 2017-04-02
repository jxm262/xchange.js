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
                return req;
            }

            req.end((err, res) => {
                cb.apply(this, [err, res]);
            });
        }
    }
}
