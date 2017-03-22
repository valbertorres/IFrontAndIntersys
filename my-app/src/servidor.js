var http = require('http');
var file = require('fs');

http.createServer(function(request, response){
  file.readFile('index.html',function(erro,conteudo){
    if(erro){
      console.log(erro);
    }else{
      response.write(conteudo);
    }
    response.end();
  })
}).listen(4501);

console.log("loarding port 4500....")

