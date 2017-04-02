import request from 'superagent'
import config from './config'
import legacyXchange from './legacy/xchange'
import kraken from './exchanges/kraken'


const legacy = legacyXchange;

//todo refactor this config stuff to a cleaner api.  This factory shouldn't be exposed to public
export function xchangeFactory() {
    return {
        kraken: Object.assign({}, legacyXchange.kraken, kraken(config)),
    }
}

export default Object.assign({}, legacy, xchangeFactory('PROD'))
