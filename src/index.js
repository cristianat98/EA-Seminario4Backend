
let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
io.on('connection', (socket) => {
  console.log(socket);
 
  socket.on('disconnect', function(){
    io.emit('users-changed', {user: socket.username, event: 'left'});  
  });
  socket.on('set-name', (name) => {
    socket.username = name;
    io.emit('users-changed', {user: name, event: 'joined'});    
  });
  
  socket.on('send-message', (message) => {
    io.emit('message', {msg: message.text, user: socket.username, createdAt: new Date()});    
  });
});

var port = process.env.PORT || 3001;
server.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});

//Cambiar a socket.js e intentar que inicie los dos servidores a la vez. Cambiar el package.json para que el start incluya tanto el index.js como el socket.js de la carpeta dist. 