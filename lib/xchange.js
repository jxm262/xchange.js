import legacyXchange from './legacy/xchange'
import kraken from './exchanges/kraken'
import config from './config'


const legacy = legacyXchange;

//todo refactor this config stuff to a cleaner api.  This factory shouldn't be exposed to public
export function xchangeFactory(env) {
    return {
        kraken: Object.assign({}, legacyXchange.kraken, kraken(config[env])),
    }
}

export default Object.assign({}, legacy, xchangeFactory('PROD'))
