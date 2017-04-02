import request  from 'supertest'
import express from 'express'
import config from '../../lib/config'

const env = config['LOCAL'];

const app = express();


app.get(env.kraken.serverTime, function(req, res) {

    res.status(200).json({
        "error": [],
        "result": {
            "unixtime": 1491077507,
            "rfc1123": "Sat,  1 Apr 17 20:11:47 +0000"
        }
    });
});

//app.get(env.kraken.serverTime, function(req, res) {
//
//    res.status(200).json({
//        "error": [],
//        "result": {
//            "unixtime": 1491077507,
//            "rfc1123": "Sat,  1 Apr 17 20:11:47 +0000"
//        }
//    });
//});
//

export default app;