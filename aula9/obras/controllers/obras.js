var Obra = require('../models/obras')

const Obras = module.exports

Obras.obras = () =>{
    return Obra
        .find()
        .exec()
}

Obras.obras_id = id =>{
    return Obra
        .find({id: id})
        .exec()
}


Obras.obras_ano = year =>{
    return Obra
        .find({anoCriacao: year})
        .exec()
}

Obras.obras_periodo = p =>{
    return Obra
        .find({periodo: p})
        .exec()
}

Obras.obras_compositor_duracao = (c,d) =>{
    return Obra
        .find({compositor:c})
        .where("duracao")
        .gte(d)
        .exec()
}

