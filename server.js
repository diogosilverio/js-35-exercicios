var http = require('http');

http.createServer(function(req, res){
	console.log('Requisicao Feita.');
	res.writeHead(200, {ContentType: 'text/html'});
	res.end('<h1>Oi</h1>');
}).listen(3000, function(){console.log('Servidor de pe');});