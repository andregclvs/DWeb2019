var mongoose = require('mongoose')
var Schema = mongoose.Schema

var laureatesSchema = new Schema({
    id: String,
    firstname:String,
    surname:String,
    motivation:String,
    share:Number
  });

var prizesSchema = new Schema({
    year:String,
    category:String,
    overallMotivation:String,   
    laureates:[laureatesSchema]
});

module.exports = mongoose.model('nobels', prizesSchema)