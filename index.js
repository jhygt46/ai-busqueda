console.log('1');

// Connect to server
var io = require('socket.io-client')
var socket = io.connect('http://35.226.249.89:80', { reconnect: true });

console.log('2');

// Add a connect listener
socket.on('connect', function(socket) {
    console.log('Connected!');
});

console.log('3');

/*
var io = require('socket.io-client');
var socket = io.connect('http://35.226.249.89:80', { reconnect: true });

const fs = require("fs");

const express = require("express");
const app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var config = JSON.parse(fs.readFileSync('./config.json'));

app.listen(config.port, () => {
    console.log("El servidor está inicializado en el puerto "+config.port);
    socket.on('connect', function(socket) { 
        console.log('Connected!');
    });
});

app.get('/busqueda', urlencodedParser, function(req, res){

	res.setHeader('Content-Type', 'application/json');
	console.log(req.body.id);

});
*/