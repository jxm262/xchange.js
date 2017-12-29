// /**
// * Note the use auto-managed sandboxes in sinon.test - http://sinonjs.org/docs/#sinon-test
// */
//
// "use strict";
//
// var xchange = require("../lib/legacy/xchange")
//    , apis = require("../lib/legacy/apis")
//    , superagent = require("superagent")
//    , assert = require("assert")
//    , chai = require("chai")
//    , sinon = require("sinon")
//    , sinonChai = require("sinon-chai")
//    , should = chai.should()
//    , expect = chai.expect;
//
// chai.use(sinonChai);
//
// describe("xchange.js", function () {
//
//    it("should contain all exchanges and corresponding function to retrieve spot price", function () {
//        for (var apiName in apis) {
//            xchange.should.have.property(apiName);
//            xchange[apiName].ticker.should.be.a("function");
//        }
//    });
//
//    it("each exchanges spot price function should send error to callback when errored", sinon.test(function () {
//        var callback = sinon.spy();
//
//        superagent.get = sinon.stub().returns(superagent);
//        superagent.set = sinon.stub().returns(superagent);
//        superagent.end = function (callback) {
//            callback({error: "error"});
//        };
//
//        xchange.bitstamp.ticker(callback);
//        callback.should.have.been.calledWith("error");
//
//    }));
//
//    it("each exchanges spot price function should send statusCode to callback when not 200", sinon.test(function () {
//        var callback = sinon.spy();
//
//        superagent.get = sinon.stub().returns(superagent);
//        superagent.set = sinon.stub().returns(superagent);
//        superagent.end = function (callback) {
//            callback({statusCode: 500});
//        };
//
//        xchange.bitstamp.ticker(callback);
//        callback.should.have.been.calledWith("response.statusCode = 500");
//    }));
//
//    it("each exchanges spot price function should retrieve valid json when successful", sinon.test(function () {
//        var callback = sinon.spy();
//
//        superagent.get = sinon.stub().returns(superagent);
//        superagent.set = sinon.stub().returns(superagent);
//        superagent.end = function (callback) {
//            callback({statusCode: 200, body: "some test body"});
//        };
//
//        for (var apiName in apis) {
//            xchange.bitstamp.ticker(callback);
//            callback.should.have.been.called;
//        }
//    }));
//
// });
