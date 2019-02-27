var http = require('http');
var url = require('url');
http.createServer(function(req,res) {
res.writeHead(200,{'Conten-Type': 'Text/html'});
var q = url.parse(req.url,true).query;
var dates = q.year + "" + q.month;
res.end(dates);
}).listen(8088);