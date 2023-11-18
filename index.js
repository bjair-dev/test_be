/* const express = require('express');
const mysql = require('mysql');
const router = express.Router();

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: '127.0.0.1',
  port:'3396',
  user: 'root',
  password: 'Itd@t@2022',
  database: 'bd_cuota',
});





// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Ruta para probar la conexión

var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response);
});


router.get('/', (req, res) => {
res.send("Testeo")
});

router.get('/dbTest', (req, res) => {
  res.send('Conexión exitosa a la base de datos desde /dbtest');
});

module.exports = router;  */






var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url === '/') {
        // Ruta principal
        res.writeHead(200, {'Content-Type': 'text/plain'});
        var message = 'It works!\n',
            version = 'NodeJS ' + process.versions.node + '\n',
            response = [message, version].join('\n');
        res.end(response);
    } else if (req.url === '/dbtest') {
        // Ruta para dbtest
        res.writeHead(200, {'Content-Type': 'text/plain'});
        var dbMessage = 'Conexión correcta\n';
        res.end(dbMessage);
    } else {
        // Ruta no encontrada
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found\n');
    }
});

/* var port = 3000; */
server.listen();

