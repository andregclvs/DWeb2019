function updateItem (prov,local,tit,musico){
	console.log('atualizar o' + prov)
	axios.put('/',{
        uprov:prov,
        ulocal:local,
        utit:tit,
        umusico:musico
    })
	.then(function(response){
            window.location.assign('/')
    })
	.catch(error=>console.log(prov +"klk"))
}