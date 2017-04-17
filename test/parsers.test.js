import nock from 'nock';
import chai from 'chai';
import sinon from 'sinon';
import _ from 'lodash';
import { parsefilterToQueryParams, dataToSegmentedUrl } from '../lib/parsers'


describe('parsers', function () {


    describe('dataToSegmentedUrl', function() {
        it.only('converts input data {data: "value"} and url /endpoint/data to new url /endpoint/value', function () {
            const url = '/hello/<%=segment1%>/world/<%=segment2%>/test';
            const templated = _.template(url);
            const inputData = {
                segment1: "hola",
                segment2: "mundo"
            };

            const segmentedUrl = templated(inputData);
            segmentedUrl.should.equal('/hello/hola/world/mundo/test');
        });
    });

    describe('parsefilterToQueryParams', function () {
        it('parses array to csv', function () {
            const body = {
                data: ['a', 'b', 'c']
            };

            const expected = '?data=a,b,c';
            const actual = parsefilterToQueryParams(body);

            actual.should.equal(expected);
        });

        it('parses string value', function () {
            const body = {
                data: 'hello'
            };

            const expected = '?data=hello';
            const actual = parsefilterToQueryParams(body);

            actual.should.equal(expected);
        });

        it('parses numeric value', function () {
            const body = {
                data: -999
            };

            const expected = '?data=-999';
            const actual = parsefilterToQueryParams(body);

            actual.should.equal(expected);
        });

        it('parses and appends multiple values', function () {
            const body = {
                dataNumeric: -999,
                dataCSV: ['a', 'b', 'c'],
                dataString: 'hello'
            };

            const expected = '?dataNumeric=-999&dataCSV=a,b,c&dataString=hello';
            const actual = parsefilterToQueryParams(body);

            actual.should.equal(expected);
        });
    });
});
