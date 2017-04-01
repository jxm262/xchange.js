import legacyXchange from './legacy/xchange'

export const legacy = legacyXchange

var xchange = {};


export default Object.assign({}, legacy, xchange);
