const express = require('express');
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

module.exports = router; */