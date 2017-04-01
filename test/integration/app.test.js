import xchange from "../../lib/xchange";
import request from 'supertest';
import app from "./it-server";
import config from '../../lib/config'

const env = config('LOCAL');


describe.only('xchange.js', function() {

	describe('kraken', function() {
		const urls = env.kraken;

		describe('serverTime', function() {
		  it('retrieves server time', function() {

			  request(app)
				  .get(urls.serverTime)
				  .set('Accept', 'application/json')
				  .expect('Content-Type', /json/)
				  .expect(function(res) {
					  console.log('res... ', res.body);

					  //res.body.id = 'some fixed id';
					  //res.body.name = res.body.name.toUpperCase();
				  })
				  .expect(200, done);


		  });
		});

		//describe('ticker', function () {
		//	it('returns ticker info on good resp', function(done) {
		//		xchange.kraken.ticker(function(error, resp){
		//			console.log("--here.. ", resp);
		//			if(!error){
		//				console.log(resp);
		//			}
		//			done();
		//		});
		//	});
        //
		//	it('returns error on bad response', function() {
		//		//todo
		//	});
        //
		//});

	});


});
