var http = require('http');

var server = http.createServer(onRequest);

var port = process.argv[2];
server.listen(port);

console.log("Seveur started on http://localhost:" + port );

function onRequest(req, res)
{
    console.log( req );
    console.log("Une requête a été faite");
    
    res.writeHead(200);
    res.end("Voici ma page de base !");
}