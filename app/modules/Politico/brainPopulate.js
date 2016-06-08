'use strict';

const request = require('request')
const cheerio = require('cheerio')
const pegar = [];
const _politicos = [];
const Politico = {};

module.exports = (Organism) => {
  const callbackExpress = require('./organisms/organelles/callbackExpress');
  return (_req, _res) => {
    request('https://www25.senado.leg.br/web/senadores/senador/-/perfil/70', (err,res,body)=>{
      if(err || res.statusCode != 200) throw new Error(err);
      const $ = cheerio.load(body);
      const recebe = $('.dl-horizontal dd').each(function(e,l){
        pegar.push($(this).text().trim());
      });
      Politico.nome       = pegar[0];
      Politico.nascimento   = pegar[1];
      Politico.naturalidade   = pegar[2];
      Politico.cidade   = Politico.naturalidade.split(' ')[0];
      Politico.estado   = Politico.naturalidade.split(' ')[1].replace('(', '').replace(')', '');
      Politico.gabinete     = pegar[3];
      Politico.telefones    = pegar[4];
      Politico.fax      = pegar[5];
      Politico.email      = pegar[6];
      Politico.apoio      = pegar[7];
      console.log('Politico.naturalidade', Politico.naturalidade);
      console.log('pegar', pegar);
      // _politicos.push(Politico);
      // console.log('_politicos', _politicos);
      // let obj = req.body;
      Organism.create(Politico, (err, data) => {
        callbackExpress(err, data, _res);
      });
    });



  };
};