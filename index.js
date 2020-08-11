var io = require('socket.io-client')
var socket = io.connect('http://35.226.249.89:80', { reconnect: true });

socket.on('connect', function(socket) {
    console.log('Connected!');
});
/*
socket.on('nuevo_correo', function(data){
    console.log(data);
});
*/
socket.onevent = function(data){
    console.log(data);
}
socket.on('disconnect', function(socket) {
    console.log('Disconnected!');
});


const express = require("express");
const app = express();
const fs = require("fs");

var config = JSON.parse(fs.readFileSync('./config.json'));

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(config.port, () => {
    console.log("El servidor está inicializado en el puerto "+config.port);
});
app.get('/', urlencodedParser, function(req, res){

	res.setHeader('Content-Type', 'application/json');
	console.log("BUENA NELSON 6");

});

/*

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