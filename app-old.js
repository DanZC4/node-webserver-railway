const http = require('http');

http.createServer((req, res) => {

   
    //res.writeHead(200, {'Content-Type': 'text/plain'})
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    //res.writeHead(200, {'Content-Type': 'aplication/csv'})
    res.write('holaperas');

 

    res.end();

}).listen(8080);


console.log('escuchando el puerto', 8080);