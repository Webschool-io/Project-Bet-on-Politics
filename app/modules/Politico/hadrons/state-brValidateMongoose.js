'use strict'

const QuarkName = 'State-BR';

module.exports = {
  validator: require('./../quarks/is'+QuarkName)
, message: require('./../quarks/is'+QuarkName+'Message')
};