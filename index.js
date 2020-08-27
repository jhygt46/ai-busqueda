/*
var io = require('socket.io-client')
var socket = io.connect('http://35.226.249.89:80', { reconnect: true });


socket.on('nuevo_correo', function(data){
    console.log(data);
});


socket.on('connect', function(socket) {
    console.log('Connected!');
});
socket.onevent = function(data){

    switch (packet.data[0]) {
        case 'cambiar_precio':
            cambiar_precio(packet.data[1]);
        break;
        case 'cambiar_cantidad':
            cambiar_cantidad(packet.data[1]);
        break;
    }

}
socket.on('disconnect', function(socket) {
    console.log('Disconnected!');
});
*/

const express = require("express");
const app = express();

var fs = require('fs');
var helpers = require('./helpers');
var config = JSON.parse(fs.readFileSync('./config.json'));

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



var empresas = [{info: '', categorias: [{sku: 1, precio: 1000}, {id: 1, precio: {}}], locales: [{lat: 1, lng: 1}, {lat: 2, lng: 2}]}];
var data = {};

var obj_precio = { base: 2000, loc: { 3: 2200, 5: 2100 }};
var obj_precio = { base: 2000, loc: { 3: 2200, 5: 2100 }};



app.get('/', function(req, res){

    res.setHeader('Content-Type', 'application/json');
    data[0] = {};
    data[0][0] = [[0, 0], [0, 0]];
    res.end(JSON.stringify(obj_precio));
    //res.end(JSON.stringify(res.end(busqueda(1, [0, 1]))));

});
app.post('/buscar', urlencodedParser, function(req, res){

	res.setHeader('Content-Type', 'application/json');
    console.log("ID: "+req.body.id);
    console.log("ID: "+req.body.locs);
    console.log("ID: "+req.body.conf);
    res.end(busqueda(req.body.id, req.body.locs, req.body.conf));

});

function puntaje_id(id, calidad, precio, cantidad){}
function puntaje_sku(sku, precio, cantidad){}
function busqueda(id, locs, conf){

    var distancia = 0;
    var res = [];
    if(data[id] !== undefined){
        for(var i=0; i<locs.length; i++){

            conf = busqueda_conf(data[id]['conf'], conf);

            data[id]['zonas'][locs[i]].forEach(function(item){
                
                distancia = empresas[item.id_emp]['posicion'];
                if(conf.conf == undefined){}else{}
                if(conf.eval !== undefined){}
                
                
                empresas[item.id_emp]['categorias'][item.id_cat].forEach(function(pro){
                    if(pro.id !== undefined){
                        res.push(puntaje_id(pro.id, pro.precio, pro.calidad));
                    }
                    if(pro.sku !== undefined){
                        res.push(puntaje_sku(pro.sku, pro.precio));
                    }
                });




            });
        }
    }

}

app.listen(config.port, () => {
    fs.appendFile('init.log', 'Servidor iniciado a las ' + new Date().toLocaleString() + ' en puerto ' + config.port + '\n', function(err){ if(err) return console.log(err); console.log("SERVER START") });
});
