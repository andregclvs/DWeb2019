var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://clav-api.dglab.gov.pt/api/entidades?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ")
    .then(dados => {
      res.render('lista-entidades', {lista: dados.data})
    })
    .catch(erro => {
      res.render('error', {error:erro})
    })
});

router.get('/:id', function(req, res, next) {
  axios.get("http://clav-api.dglab.gov.pt/api/entidades/" + req.params.id + "?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ")
    .then(a => {
      axios.get("http://clav-api.dglab.gov.pt/api/entidades/" + req.params.id + "/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ")
        .then(b => {
          axios.get("http://clav-api.dglab.gov.pt/api/entidades/" + req.params.id + "/intervencao/dono?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ")
            .then(c => {
              console.log(c.data)
              axios.get("http://clav-api.dglab.gov.pt/api/entidades/" + req.params.id + "/intervencao/participante?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ")
                .then(d => {
                  console.log(d.data)
                  res.render('pag-entidade', {ent: a.data, topo: b.data, dono: c.data, par: d.data})
                })
                .catch(erro => {
                  res.render('error', {error:erro})
                })
            })
            .catch(erro => {
              res.render('error', {error:erro})
            })
        })
        .catch(erro => {
          res.render('error', {error:erro})
        })
    })
    .catch(erro => {
      res.render('error', {error:erro})
    })
});

module.exports = router;