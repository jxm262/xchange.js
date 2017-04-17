import request from 'superagent';
import _ from 'lodash';


const userAgent = {'User-Agent': 'xchange.js'};

function reduceArrayToCommaDelimString(arr) {
    return arr.reduce((prev, next) => {
        const appended = (prev === "")
            ? next
            : `${prev},${next}`;

        return appended;
    }, "")

}

/**
 * Takes an object representing a query string and returns the actual query string
 *
 * Example:
 *    input  = { pair: ['USD', 'JPY'], name: 'Justin' }
 *    output = ?pair=USD,JPY&name=Justin
 *
 * @param filterObj
 * @returns {*}
 */
export function parsefilterToQueryParams(filterObj) {
    return Object.entries(filterObj).reduce((accum, next) => {
        const [key, value] = next;

        let nextValue = value;

        if (Array.isArray(value)) {
            nextValue = reduceArrayToCommaDelimString(value)
        }


        return (accum === "")
            ? `?${key}=${nextValue}`
            : `${accum}&${key}=${nextValue}`
    }, "");
}

/**
 * Converts a request and optional callback into returning either a Promise or callback style invocation
 * This is the code that lets you use either a cb or a Promise
 * @param req
 * @param cb
 * @returns {Promise.<T>}
 */
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


/**
 * input
 *   url = /endpoint/<%segment1%>/<%segment2%>
 *   data = { segment1: hello, segment2: world }
 *
 * output
 *   /endpoint/hello/world
 */
export function dataToSegmentedUrl(url, data) {
    console.log("---url ", url );
    console.log("---data ", data);
    const templatedUrl = _.template(url)
    const m = templatedUrl(data)
    console.log('m...', m);
    return m;
}

/**
 * input
 *   url = /endpoint
 *   data = { qs1: hello, qs2: world }
 *
 * output
 *    /endpoint?qs1=hello&qs2=world
 */
export function dataToQueryStringUrl(url, data) {
    const queryStrings = parsefilterToQueryParams(data);
    return (url + queryStrings);
}

export function createGetRequest(api, url, data) {
    const dataFilter = data || {};

    const parsedUrl = (api.segmented)
        ? dataToSegmentedUrl(url, dataFilter)
        : dataToQueryStringUrl(url,dataFilter);

    console.log('parsedUrl ', parsedUrl);

    return request(api.type, parsedUrl)
        .set(userAgent);
}

export function createPostRequest(api, url, data) {
    return request(api.type, url)
        .set(userAgent)
        .send(data);
}

/**
 * Input an api object, this loops through all the properties and transforms it into an object of actual web requests
 * example:
 *      input { rootUrl: .., unauthenticated: { apiName: ... } }
 *      output { apiName: function(cb) {..} , ..}
 *
 * @param apis
 * @returns {*}
 */
export function createEndpoints(apis) {
    //todo authed
    const unauth = apis.unauthenticated;

    const mapped = _.mapValues(unauth, (next) => {

        const url = apis.rootUrl + next.url;

        return (data, cb) => {
            const req = (next.type === 'GET')
                ? createGetRequest(next, url, data)
                : createPostRequest(next, url, data);

            return parseResponse(req, cb);
        };
    });

    return mapped;
}
