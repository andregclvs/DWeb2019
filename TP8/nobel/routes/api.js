const express= require('express');
const router = express.Router();

var Nobel = require('../controllers/nobels')

router.get('/premios', function(req, res, next) {
    if (req.query.categoria==undefined){
        Nobel.premios()
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
    else if (req.query.categoria!=undefined && req.query.data!=undefined){
        Nobel.premios_categoria_data(req.query.categoria,req.query.data)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
    else if (req.query.categoria!=undefined && req.query.data==undefined){
        Nobel.premios_categoria(req.query.categoria)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
});

router.get('/premios/:id', function(req, res, next) {
    Nobel.premios_id(req.params.id)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
  });

router.get('/categorias', function(req, res, next) {
    Nobel.categorias()
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
});

router.get('/laureados', function(req, res, next) {
    Nobel.laureados()
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
});

module.exports = router;