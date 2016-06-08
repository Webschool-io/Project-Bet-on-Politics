'use strict';

const mongoose = require('mongoose');
const Molecule = require('./../molecules/politico');
const MoleculeName = 'Politic';
const Organism = mongoose.model(MoleculeName, Molecule);

const create = require('./organelles/create')(Organism);
const find = require('./organelles/find')(Organism);
const findOne = require('./organelles/findOne')(Organism);
const update = require('./organelles/update')(Organism);
const remove = require('./organelles/remove')(Organism);
const populate = require('./organelles/populate')(Organism);

const Cell = {
  create
, find
, findOne
, update
, remove
, populate
};

module.exports = Cell;