import request from 'superagent'
import legacyXchange from './legacy/xchange'
import kraken from './exchanges/kraken'
import coinbase from './exchanges/coinbase'
import bitfinex from './exchanges/bitfinex'


/**
 * NOTE this factory is temporary to merge the legacy code with the new codebase
 * Will be removed soon when legacy is migrated to newer pattern
 */
export default function () {
    return {
        //override exchanges in legacy app
        kraken: Object.assign(
            {},
            legacyXchange.kraken,
            kraken
        ),
        bitfinex: Object.assign(
            {},
            legacyXchange.bitfinex,
            bitfinex
        ),

        //newly added exchanges
        coinbase: coinbase,
    }
}
