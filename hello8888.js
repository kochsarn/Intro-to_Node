var http=require('http');
http.createServer(function(req,res) {
res.writeHead(200,{'Conten-Type': 'Text/html'});
res.end('Hello word from node JS My name WAT');
}).listen(4444);