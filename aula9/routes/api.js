var express= require('express');
var router = express.Router();

var Obra = require('../controllers/obras')

router.get('/obras', function(req, res, next) {
    if (req.query.ano){
        Obra.obras_ano(req.query.ano)
            .then(dados=>{
                res.jsonp(dados)
                console.log('entreeee')
            })
            .catch(erro=>res.status(500).jsonp(erro));
    }
    else if (req.query.compositor!=null && req.query.duracao!=null){
        Obra.obras_compositor_duracao(req.query.compositor,req.query.duracao)
            .then(dados=>res.jsonp(dados))
            .catch(erro=>res.status(500).jsonp(erro));
    }
    else if (req.query.periodo!=null){
        Obra.obras_periodo(req.query.periodo)
            .then(dados=>res.jsonp(dados))
            .catch(erro=>res.status(500).jsonp(erro));
    }
    else {
        Obra.obras()
            .then(dados=>res.jsonp(dados))
            .catch(erro=>res.status(500).jsonp(erro));
    }
});

router.get('/obras/:id', function(req, res, next) {
    Obra.obras_id(req.params.id)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
  });

module.exports = router;