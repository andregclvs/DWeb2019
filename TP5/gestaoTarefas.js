var http = require('http')
var url = require('url')
var pug = require('pug')
var fs = require('fs')
var jsonfile = require ('jsonfile')

var {parse} = require ('querystring')

var myBD= "tarefas.json"

var myServer = http.createServer((req, res)=> {
    var purl = url.parse(req.url, true)
    var query = purl.query 

    console.log (req.method + ' ' + purl.pathname)

    if(req.method == 'GET'){
        if((purl.pathname == '/')||(purl.pathname == '/gestaoTarefas')){
            jsonfile.readFile(myBD, (erro,tarefas)=>{
                res.writeHead(200,{
                    'Content-Type': 'text/html; charset=utf-8'
                })
                if(!erro){
                    res.write(pug.renderFile('form-tarefa.pug', {lista: tarefas}))
                }
                else{
                    res.write(pug.renderFile('erro.pug', {e: "Erro na leitura da BD..."}))
                }
                res.end() 
            })
        }
        else if(purl.pathname == '/w3.css'){
            res.writeHead(200,{'Content-Type': 'text/css'})
            fs.readFile('stylesheets/w3.css', (erro, dados)=>{
                if(!erro){
                    res.write(dados)
                }
                else
                    res.write("<p>Erro: " + erro + "</p>")
                    res.end()
            })
            
        }
        else{
            res.writeHead(200,{
                'Content-Type': 'text/html; charset=utf-8'
            })
            res.write(pug.renderFile('erro.pug', 
            {e: "ERRO: " + req.method + " não suportado..."}))
            res.end()
        }
    }    
    else if(req.method == 'POST'){
        if(purl.pathname =='/tarefa'){
            recuperaInfo(req, resultado=> {
                jsonfile.readFile(myBD, (erro,tarefas)=>{
                    if(!erro){
                        tarefas.push(resultado)
                        jsonfile.writeFile(myBD, tarefas, erro => {
                            if(erro)
                                console.log(erro)
                            else{
                                console.log('Registo gravado com sucesso...')
                            }
                            res.writeHead(301,{'Location':'http://localhost:5005/'})
                            res.end()
                        })
                    }
                })
            })
        }

    }
    else{
        res.writeHead(200,{
            'Content-Type': 'text/html; charset=utf-8'
        })
        res.write(pug.renderFile('erro.pug', 
        {e: "ERRO: " + req.method + " não suportado..."}))
        res.end()
    }
})
myServer.listen(5005, ()=>{
    console.log("Servidor à escuta na porta 5005")
})

function recuperaInfo(request, callback){
    if(request.headers['content-type'] == 'application/x-www-form-urlencoded'){
        let body = ''
        request.on('data',bloco =>{
            body += bloco.toString()
        })
        request.on('end', ()=>{
            callback(parse(body))
        })
    }

}