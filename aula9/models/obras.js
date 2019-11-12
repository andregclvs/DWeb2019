var mongoose = require('mongoose')
var Schema = mongoose.Schema

var obrasSchema = new Schema({
    nome:String,
    desc:String,
    anoCriacao:String,   
    periodo:String,
    compositor:String,
    duracao:String,
    id:String
});

module.exports = mongoose.model('obras', obrasSchema)