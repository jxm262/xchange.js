import request from 'superagent'
import config from './config'
import legacy from './legacy/xchange'
import kraken from './exchanges/kraken'
import xchangeFactory from './xchangeFactory'


export default Object.assign({}, legacy, xchangeFactory());
