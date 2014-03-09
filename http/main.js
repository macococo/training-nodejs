var http = require('http'),
	url = require('url'),
	querystring = require('querystring');

var server = http.createServer();

server.on('request', function(request, response) {
	response.setHeader('Content-Type', 'text/html');
	response.writeHead(200);
	response.write('<form method="post" action="/"><input type="text" name="value"/><input type="submit"/></form>');

	if (request.method === 'POST') {
		var data = '';
		request.on('data', function(chunk) {
			data += chunk;
		});
		request.on('end', function() {
			console.log(querystring.parse(data));
		});
	}

	response.end();
});

server.listen(8080, '127.0.0.1');
