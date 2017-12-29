import chai from 'chai';
import apis from '../lib/legacy/apis';

chai.should();


describe('apis.js', () => {
  it('should contain map of exchange objects', () => {
    apis.should.have.property('okcoin');
    apis.should.have.property('bitfinex');
    apis.should.have.property('bitstamp');
    apis.should.have.property('btce');
    apis.should.have.property('btc38');
    apis.should.have.property('bter');
    apis.should.have.property('hitbtc');
    apis.should.have.property('ccex');
    apis.should.have.property('kraken');
  });
});

describe('exchange objects', () => {
  it('should contain tickerUrl String', () => {
    // eslint-disable-next-line
    for (const obj in apis) {
      apis[obj].tickerUrl.should.be.a('string');
    }
  });

  // is this part even worth testing?
  it('should contain a jsonSchema definition', () => {
    // eslint-disable-next-line
    for (const obj in apis) {
      const jsonSchema = apis[obj].jsonSchema;
      jsonSchema.should.be.an('object');

      // eslint-disable-next-line
      for (const key in jsonSchema) {
        jsonSchema[key].should.be.a('string');
      }
    }
  });
});
