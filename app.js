/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var
        gameport = process.env.PORT || 4004,
        io = require('socket.io'),
        express = require('express'),
        http = require('http'),
        app = express(),
        server = http.createServer(app);

server.listen(gameport);



app.get('/', function (req, res) {
    res.sendFile('/index.html', {root: __dirname});
});

app.get('/*', function (req, res, next) {
    res.sendFile(__dirname + '/' + req.params[0]);
});

var sio = io.listen(server);


app_server = require('./server.js');
var data = {lv:1, safety:false};
var mes="";


sio.sockets.on('connection', function (client) {
    client.emit('onconnected', {});
    console.log('connected');
    
    	client.on('spin', function(msg){
            console.log('spin');
		data.lv = parseInt(msg);
                if (data.lv<1 || data.lv>19)
                    mes = "error";
                else {
                    mes=app_server.onMessage(data);
                    console.log('emitting '+mes);
                    sio.emit('result', mes);
                }
	});
    
    client.on('disconnect', function () {

        //notify of disconnection
        console.log('\t socket.io:: client disconnected ' + client.userid + ' ' + client.game_id);



    });
});