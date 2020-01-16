var mongoose= require('mongoose')
var Schema = mongoose.Schema


var partituraSchema = new mongoose.Schema({
    path: String,
    voz: String
})

var instrumentosSchema = new Schema({
        designacao : {type : String},
        partitura: partituraSchema
})

var videoSchema = new mongoose.Schema({
    video: {
        href: String
    }
})

var obrasSchema = new Schema({
    id: String,
    titulo: String,
    subtitulo: String,
    tipo: String,
    compositor: String,
    arranjo: String,
    inforelacionada: videoSchema,
    instrumentos: [instrumentosSchema]
})



module.exports=mongoose.model('obras',obrasSchema) 


