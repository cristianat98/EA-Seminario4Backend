
/*const { io } = require('../index');

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
  });*/

  //export default (io);