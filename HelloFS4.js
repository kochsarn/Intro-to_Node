var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res) {
 var q	= url.parse(req.url,true);
 var filename = "." + q.pathname;
 if (filename == './'){filename = 'index.html';}
 
fs.readFile(filename,function(err,data){
  if (err) {
	  res.writeHead(404,{'Conten-Type': 'text/html'});
	  return res.end("404 Not Found")
  } 
   res.writeHead(200,{'Conten-Type': 'text/html'});
   res.write(data);
   res.end();
	});
}).listen(8088);
console.log("Server Listening on port 8088..");