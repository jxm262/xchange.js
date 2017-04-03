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
                return new Promise(function (resolve, reject) {
                    req.end((err, res) => {
                        if (err) {
                            reject(err);
                        }

                        else {
                            resolve(res.body);
                        }
                    });
                })
            }

            req.end((err, res) => {
                const response = (res) ? res.body : res;
                cb.apply(this, [err, response]);
            });
        }
    }
}
