import request from 'superagent'


export default function (config) {
    console.log('passed to kraken func . ', config);
    const urls = config.kraken;

    return {
        serverTime: () => {
            console.log("called ", urls );
            //request
            //    .get(exchange.tickerUrl)
            //    .set(requestOptions())
            //    .end((response) => {
            //        if (response.error) {
            //            callback(response.error);
            //        } else if (response.statusCode !== 200) {
            //            callback(`response.statusCode = ${response.statusCode}`);
            //        } else {
            //            callback(null, decorator.ticker(JSON.parse(JSON.stringify(response.body)), exchange.jsonSchema));
            //        }
            //    });
        }
    }
}