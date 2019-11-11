var Prize = require('../models/nobels')

const Nobel = module.exports

Nobel.premios = () =>{
    return Prize
        .find({},{year:1,category:1})
        .exec()
}

Nobel.premios_id = id =>{
    return Prize
        .find({_id: id})
        .exec()
}

Nobel.categorias = () =>{
    return Prize
        .find({},{category:1})
        .distinct('category')
        .exec()
}

Nobel.premios_categoria = categoria =>{
    return Prize
        .find({category:categoria})
        .exec()
}

Nobel.premios_categoria_data = (categoria,ano) =>{
    return Prize
        .find({category:categoria,year:ano})
        .exec()
}

Nobel.laureados = () =>{
    return Prize
        .aggregate([
            {$unwind:"$laureates"},
            {$project:{name: {$concat:["$laureates.firstname"," ","$laureates.surname"]},premio:{year:"$year",category:"$category"}}},
            {$group:{_id:"$name",premios:{$push:"$premio"}}},
            {$sort:{name:1}}
        ])
        .exec()
}