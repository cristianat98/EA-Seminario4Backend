//FICHERO EJECUCIÓN DEL PROYECTO
import app from './app'; //app exportada en app.ts
//Ejecutamos la conexion a la BBDD antes de escuchar al server
import './database'; 

let server = require('http').createServer(app);
let io = require('socket.io')(server);

io.on('connection', (socket: any) => {
    console.log(socket);
   
    socket.on('disconnect', function(){
      io.emit('users-changed', {user: socket.username, event: 'left'});  
    });
    socket.on('set-name', (name: any) => {
      socket.username = name;
      io.emit('users-changed', {user: name, event: 'joined'});    
    });
    
    socket.on('send-message', (message: any) => {
      io.emit('message', {msg: message.text, user: socket.username, createdAt: new Date()});    
    });
  });


app.listen(app.get('port')); //Recuperamos puerto de app.ts
console.log('Server in port', app.get('port'));
