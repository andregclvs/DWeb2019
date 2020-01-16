var Obra = require('../models/obras')

const Obras = module.exports

Obras.listar = () =>{
    return Obra
        .find({},{id:1, titulo: 1, tipo: 1, compositor: 1})
        .exec()
}

Obras.listar_id = i =>{
    return Obra
        .findOne({ id: i})
        .exec()
}

Obras.tipos = () => {
    return Obra
            .find({},{tipo:1})
            .distinct('tipo')
            .exec()
}

Obras.compositor = comp =>{
    return Obra
        .find({compositor: comp})
        .exec()
}

Obras.instrumento = inst =>{
    return Obra
        .find({"instrumentos.designacao": inst})
        .exec()
}

Obras.quant = () => {
    return Obra
        .find({},{id:1, titulo: 1})
        .exec()
}

