  function apagaItem (ident){
	console.log('apagar' + ident)
	
	axios.delete('/'+ident)
		.then(response=> window.location.assign('/'))
		.catch(error=>console.log(error))
}