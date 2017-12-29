import legacy from './legacy/xchange';
import xchangeFactory from './xchangeFactory';

export default Object.assign({}, legacy, xchangeFactory());
