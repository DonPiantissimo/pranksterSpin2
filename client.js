/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
var socket = io.connect();
	$('#messages').append($('<li>').text("AAAAAAAAAAAAAAAAA"));
	var myUser=-1;
	socket.on('connected', function(user){
	$('#messages').append($('<li>').text("AAAAAAAAAAAAAAAAA"));
	if (myUser==-1) myUser=user;
	});
	$('form').submit(function(){
	socket.emit('spin', $('#m').val());
	$('#m').val('');
	return false;
	});
	socket.on('result', function(msg){
	$('#messages').append($('<li>').text(msg));
	});

*/
var socket = io.connect();
document.onmousedown = function () {
	socket.emit('spin',"10");
    };
socket.on('result', function(msg){document.getElementById("winnerBoard").innerHTML = 'Waiting for players...';});
