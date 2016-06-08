'use strict';

module.exports = (Organism) => {

  const callbackExpress = require('./organisms/organelles/callbackExpress');

  return (req, res) => {
    let query = {tipo: 'senador'};

    Organism.find(query, (err, data) => {
      callbackExpress(err, data, res);
    });
  };
};