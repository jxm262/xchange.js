/**
 * API docs - https://www.kraken.com/help/api
 *
 */
import request from 'superagent';
import { mapValues } from 'lodash';


const userAgent = {'User-Agent': 'xchange.js'};

export const rootUrl = 'https://api.kraken.com';

export const endpoints = {

    unauthenticated: {
        serverTime: {
            url: '/0/public/Time',
            type: 'GET',
        },

        /**
         * @param {Object} [data]
         * @param {String} [data.info = all] info to retrieve
         * @param {String} [data.aclass = currency] asset class
         * @param {String} [data.asset = all] comma delimited list of assets to get info on
         * @param {function=} cb - node style callback
         */
        assets: {
            url: '/0/public/Assets',
            type: 'GET'
        },

        assetPairs: {
            url: '/0/public/AssetPairs',
            type: 'GET'
        },
        ohlc: {
            url: '/0/public/OHLC',
            type: 'POST'
        },
        orderBook: {
            url: '/0/public/Depth',
            type: 'POST'
        },
        recentTrades: {
            url: '/0/public/Trades',
            type: 'POST'
        },
        recentSpread: {
            url: '/0/public/Spread',
            type: 'POST'
        },
    },
};

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

function createEndpoints() {
    //todo authed
    const unauth = endpoints.unauthenticated;

    const mapped = mapValues(unauth, (next) => {

        const url = rootUrl + next.url;

        return (data, cb) => {
            const req = request(next.type, url)
                .set(userAgent)
                .send(data);

            return parseResponse(req, cb);
        };
    });

    return mapped;
}

export default createEndpoints();
