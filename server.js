const http = require('http');
function onReuest(request,response) {
 response.writeHead(200,{'Content-Type': 'text/plain'});
 response.write('123');
 response.end();
}
http.createServer(onReuest).listen(8888);