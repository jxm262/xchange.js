import request from 'superagent';
import { mapValues } from 'lodash';


const userAgent = {'User-Agent': 'xchange.js'};

export function parsefilterToQueryParams(data) {

}

export function parseResponse(req, cb) {
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

export function createEndpoints(apis) {
    //todo authed
    const unauth = apis.unauthenticated;

    const mapped = mapValues(unauth, (next) => {

        const url = apis.rootUrl + next.url;

        return (data, cb) => {
            const req = request(next.type, url)
                .set(userAgent)
                .send(data);

            return parseResponse(req, cb);
        };
    });

    return mapped;
}
