import request from 'superagent'
import config from './config'
import legacyXchange from './legacy/xchange'
import kraken from './exchanges/kraken'


/**
 * NOTE this factory is temporary to merge the legacy code with the new codebase
 * Will be removed soon when legacy is migrated to newer pattern
 */
export default function () {
    return {
        kraken: Object.assign({}, legacyXchange.kraken, kraken(config)),
    }
}
