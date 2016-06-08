const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Molecule = {
  nome: require('./../atoms/name')
, email: require('./../atoms/email')
, tipo: require('./../atoms/typePolitic')
, dataNascimento: require('./../atoms/datebirth')
, cidade: require('./../atoms/city')
, estado: require('./../atoms/state-br')
, createdAt: { type: Date, default: Date.now() }
}
module.exports = new Schema(Molecule);