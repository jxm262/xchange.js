import { xchangeFactory } from "../../lib/xchange";
import request from 'supertest';
import app from "./it-server";


describe.only('xchange.js', function() {

    const xchange = xchangeFactory('LOCAL');

	function failure(err) {
	  console.log('err ', err);
	}

	describe('kraken', function() {

		describe('serverTime', function() {
		  it('retrieves server time', function() {

				console.log('--- ', xchange.kraken);
			  //xchange.kraken.serverTime.then((resp) => {
				//	resp.body.should.deep.equal({
				//		"error": [],
				//		"result": {
				//			"unixtime": 1491077507,
				//			"rfc1123": "Sat,  1 Apr 17 20:11:47 +0000"
				//		}
				//	});
				//
				//  done();
			  //}, failure);

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
