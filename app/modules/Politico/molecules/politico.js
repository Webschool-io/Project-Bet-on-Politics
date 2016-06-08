const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Molecule = {
  nome: require('./../atoms/name')
, email: require('./../atoms/email')
, dataNascimento: require('./../atoms/datebirth')
, cidade: require('./../atoms/city')
, estado: require('./../atoms/state')
}
module.exports = new Schema(Molecule);