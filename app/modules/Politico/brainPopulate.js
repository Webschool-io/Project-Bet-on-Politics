'use strict';

const request = require('request')
const cheerio = require('cheerio')

module.exports = (Organism) => {
  const callbackWrite = require('./organisms/organelles/callbackWrite');
  return (_req, _res) => {
    const MIN = 1;
    const MAX = 209;
    let Politicos = [];
    for(let i = MIN; i < MAX; i ++) {
      let Politico = {};
      let pegar = [];
      request('https://www25.senado.leg.br/web/senadores/senador/-/perfil/'+i, (err,res,body)=>{
        console.log('CONSULTANDO SENADOR '+i)
        console.log('https://www25.senado.leg.br/web/senadores/senador/-/perfil/'+i)
        if(err || res.statusCode != 200) return console.log('FUDEU: ', err);
        const $ = cheerio.load(body);
        const recebe = $('.dl-horizontal dd').each(function(e,l){
          pegar.push($(this).text().trim());
        });
        // console.log('DADOS ', pegar)
        if(pegar.length > 1) {
          Politico.nome = pegar[0];
          Politico.nascimento = pegar[1];
          // console.log('pegar[2] ', pegar[2])
          if(pegar[2] && pegar[2].indexOf('(') > 1 ) {
            Politico.naturalidade = pegar[2];
          }
          else {
            Politico.falecimento = pegar[2];
            Politico.naturalidade = pegar[3];
          }
          if(Politico.naturalidade) {
            Politico.cidade   = Politico.naturalidade.split(' ')[0];
            Politico.estado   = Politico.naturalidade.split(' (')[1].replace('(', '').replace(')', '');
          }
          Politico.gabinete     = pegar[3];
          Politico.telefones    = pegar[4];
          Politico.fax      = pegar[5];
          Politico.email      = pegar[6];
          Politico.apoio      = pegar[7];
          // console.log('Politico.naturalidade', Politico.naturalidade);
          // _politicos.push(Politico);
          // console.log('_politicos', _politicos);
          // let obj = req.body;
          if(Politico.nome && Politico.nascimento) {
            console.log('Politico', Politico)
            Politico.tipo = 'senador';
            Politicos.push(Politico)
            Organism.create(Politico, (err, data) => {
              if(err) console.log('err no create: ', err)
                else console.log('INSERIU POLITICO: ', data)
              // callbackWrite(err, data, _res);
            });
          }
        }
      });
    }
    console.log('Politicos', Politicos)
  };
};