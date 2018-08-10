var express = require('express');
var http    = require('http');
var lib_io  = require('socket.io');
var lib_ip  = require("ip");

var port_ecoute = 8088;
var todoList = [];

var app = express();
var server = http.createServer(app);

app.set('views', __dirname + '/views');
app.get('/',function(req,res){
  var ip_port = lib_ip.address()+":"+port_ecoute.toString();
  res.render('todo.ejs',{ mon_ip_port : ip_port});
  res.end();
});

var io = lib_io.listen(server);
io.sockets.on('connection',function(la_socket){

  la_socket.emit('connected',todoList);

  la_socket.on('add',function(mess){
    var clean_message = mess.trim();

    la_socket.broadcast.emit('add',clean_message);
    la_socket.emit('add',clean_message);
    todoList.push(clean_message);
  });

  la_socket.on('remove',function(mess){
    var clean_message = mess.trim();

    if( todoList.indexOf(clean_message) > -1 ){
      la_socket.broadcast.emit('remove',clean_message);
      la_socket.emit('remove',clean_message);
      todoList.splice(todoList.indexOf(clean_message),1);
    }
  });
});

server.listen(port_ecoute ,function(){
  console.log("adresse serveur : "+lib_ip.address());
  console.log("ecoute sur le port : "+port_ecoute);
  console.log("lien url "+lib_ip.address()+":"+port_ecoute);
});
