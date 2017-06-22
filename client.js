/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var socket = io.connect();
	var myUser=-1;
	
	$('form').submit(function(){
	socket.emit('spin', $('#m').val());
	$('#m').val('');
	return false;
	});
	socket.on('result', function(msg){
	$('#messages').append($('<li>').text(msg));
	});
