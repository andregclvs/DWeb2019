const express= require('express');
const router = express.Router();

var Obra = require('../controllers/obras')

router.get('/obras', function(req, res, next) {
    if (req.query.compositor!=undefined && req.query.instrumento==undefined){
      Obra.compositor(req.query.compositor)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
    else if (req.query.compositor==undefined && req.query.instrumento!=undefined){
      Obra.instrumento(req.query.instrumento)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
    else if (req.query.compositor==undefined && req.query.instrumento==undefined){
      Obra.listar()
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
});

router.get('/obrasQuant', function(req, res, next) {
  Obra.quant()
  .then(dados=>res.jsonp(dados))
  .catch(erro=>res.status(500).jsonp(erro));
});

router.get('/tipos', function(req, res, next) {
  Obra.tipos()
  .then(dados=>res.jsonp(dados))
  .catch(erro=>res.status(500).jsonp(erro));
});

router.get('/obras/:id', function(req, res, next) {
      Obra.listar_id(req.params.id)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
  });


module.exports = router;

// node importfile.js --db musica --collection musica --file dataset.json --jsonArray
//npx express-generator --view=pug pasta
//npm i mongoose
//npm i jsonfile
//npm i json


//npm start