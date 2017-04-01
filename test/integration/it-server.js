import request  from 'supertest'
import express from 'express'
import config from '../../lib/config'

const env = config('LOCAL');

const app = express();


app.get(env.kraken.serverTime, function(req, res) {
console.log("--inget ");
    res.status(200).json({ name: 'tobi' });
});

//request(app)
//    .get('/user')
//    .expect('Content-Type', /json/)
//    .expect('Content-Length', '15')
//    .expect(200)
//    .end(function(err, res) {
//        if (err) throw err;
//    });

export default app;