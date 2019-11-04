function verFilme (id){
	axios.get('filmes/ver/'+id)
		.then(function(response){
            document.open('text/html')
            document.write(response.data)
            document.close()
        })
		.catch(error=>console.log(error))
}