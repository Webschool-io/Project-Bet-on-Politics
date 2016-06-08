'use strict';

const express = require('express');
const router = express.Router();
const Organism = require('./organisms/politico');
const Create = require('./brainCreate')(Organism);
const Find = require('./brainFind')(Organism);
const FindOne = require('./brainFindOne')(Organism);
const Update = require('./brainUpdate')(Organism);
const Remove = require('./brainRemove')(Organism);
const Populate = require('./brainPopulate')(Organism);

router.get('/', Find);
// router.get('/crawler', (req, res) => {
//   require('./crawler')(req, res);
// });
router.get('/crawler', Populate);
router.get('/:id', FindOne);
router.post('/', Create);
router.put('/:id', Update);
router.delete('/:id', Remove);

module.exports = router;