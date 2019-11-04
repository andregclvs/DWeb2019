var mongoose = require('mongoose');

/*mongoose.connect('mongodb://localhost/filmes', {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Ligação ao MongoDB feita com sucesso!')
*/

mongoose.connect('mongodb://127.0.0.1:27017/filmesDAW', {useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('Mongo ready:' + mongoose.connection.readyState))
    .catch(()=> console.log('Mongo : erro na conexão'))

    
var filmeSchema = new mongoose.Schema({
    title: String,
    year: Number,
    cast: Array,
    genres: Array
  });

  var FilmeModel = mongoose.model('filmes', filmeSchema);

  var jcrMovie = new FilmeModel({ title: 'Era uma vez...',
                                    year: 2019, 
                                    cast: ["jcr", "aluno1", "aluno2"], 
                                    genres:["Thriller", "ComÃ©dia"]});
console.log('VOu inserir este fime na BD:' +jcrMovie.title);

jcrMovie.save(function (err, filme) {
    if (err) return console.error(err);
    else
      console.log(filme.title + ' foi gravado com sucesso.')
  });

/*
FilmeHandler.find(function (err, filmes) {
    if (err) return console.error(err);
    else console.log(filmes);
})

*/

FilmeModel.findOne({title: "Era uma vez..."},(err, filme) => {
    if (err) return console.error(err);
    else console.log('Recuperei o filme:' +filme);
} )


