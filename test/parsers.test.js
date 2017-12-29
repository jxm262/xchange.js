import _ from 'lodash';
import { mergeHeaders, parsefilterToQueryParams } from '../lib/parsers';


describe('parsers', () => {
  describe('merge headers', () => {
    it('merges custom headers into default ones', () => {
      const expectedHeaders = { 'User-Agent': 'xchange.js', hello: 'world' };
      const actualHeaders = mergeHeaders({ hello: 'world' });

      expectedHeaders.should.deep.equal(actualHeaders);
    });
  });

  describe('dataToSegmentedUrl', () => {
    it('converts input data {data: "value"} and url /endpoint/data to new url /endpoint/value', () => {
      const url = '/hello/<%=segment1%>/world/<%=segment2%>/test';
      const templated = _.template(url);
      const inputData = {
        segment1: 'hola',
        segment2: 'mundo',
      };

      const segmentedUrl = templated(inputData);
      segmentedUrl.should.equal('/hello/hola/world/mundo/test');
    });
  });

  describe('parsefilterToQueryParams', () => {
    it('parses array to csv', () => {
      const body = {
        data: ['a', 'b', 'c'],
      };

      const expected = '?data=a,b,c';
      const actual = parsefilterToQueryParams(body);

      actual.should.equal(expected);
    });

    it('parses string value', () => {
      const body = {
        data: 'hello',
      };

      const expected = '?data=hello';
      const actual = parsefilterToQueryParams(body);

      actual.should.equal(expected);
    });

    it('parses numeric value', () => {
      const body = {
        data: -999,
      };

      const expected = '?data=-999';
      const actual = parsefilterToQueryParams(body);

      actual.should.equal(expected);
    });

    it('parses and appends multiple values', () => {
      const body = {
        dataNumeric: -999,
        dataCSV: ['a', 'b', 'c'],
        dataString: 'hello',
      };

      const expected = '?dataNumeric=-999&dataCSV=a,b,c&dataString=hello';
      const actual = parsefilterToQueryParams(body);

      actual.should.equal(expected);
    });
  });
});
