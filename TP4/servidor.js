var http = require('http')
var fs = require('fs')

var servidor = http.createServer(function (req, res) {
    var partes = req.url.split('/')
    var pag = partes[partes.length-1]
    console.log(req.method + ' ' + req.url)
    console.log(pag)
    if(parseInt(pag,10) < 123){
      fs.readFile('dataset/arq' + pag +'.xml',function(err,data){
        res.writeHead(200, {'Content-Type': 'text/xml'})
        res.write(data)
        res.end()
      })
    }

    else if(pag=="arq2html.xsl"){
          fs.readFile('arq2html.xsl',function(err,data){
              res.writeHead(200,{'Content-Type':'text/xml'})
              res.write(data)
              res.end()
          })
    }
    else{
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write("Ficheiro inexistente:" + pag)
      res.end()
    }

})
servidor.listen(7777)
