import request from 'superagent'
import legacy from './legacy/xchange'
import kraken from './exchanges/kraken'
import xchangeFactory from './xchangeFactory'


export default Object.assign({}, legacy, xchangeFactory());
