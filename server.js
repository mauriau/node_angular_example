var argv = require('minimist')(process.argv.slice(2), {
   string: 'name',
   integer: 'age',
   boolean: "isGranted"
});
console.dir(argv);
var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("Bonjour " + argv.name + ", vous avez " + argv.age + " ans ");
    if (true === argv.isGranted) {
        console.log("vous pouvez rentrer");
    } else {
        console.log("vous ne pouvez pas rentrer");

    }
    res.end('Hello World avec NodeJS');

}).listen(3000, '127.0.0.1');

