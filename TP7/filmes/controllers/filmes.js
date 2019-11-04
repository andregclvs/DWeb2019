var Filme = require('../models/filme')

const Filmes = module.exports

Filmes.listar = () => {
    return Filme
            .find()
            .sort({title:1})
            .exec()
}

Filmes.consultar = fid => {
    return Filme.findOne({_id:fid}).exec()
}


Filmes.apagar = fid => {
    return Filme.deleteOne({_id:fid})
}

Filmes.inserir = obj => {
    return obj.save(function (err, filme) {
        if (err) return console.error(err);
        else
          console.log(filme.title + ' foi inserido')
      });
}

Filmes.atualizar = (fid,obj) =>{
    return Filme.findOneAndUpdate({ _id: fid }, {$set:obj}).exec()
}