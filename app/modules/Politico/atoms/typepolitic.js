'use strict';

const AtomName = 'TypePolitic';

module.exports = {
  type: String
, validate: require('./../hadrons/'+AtomName.toLowerCase()+'ValidateMongoose')
, required: true
}