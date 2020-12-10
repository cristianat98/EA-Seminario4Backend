"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//FICHERO EJECUCIÓN DEL PROYECTO
const app_1 = __importDefault(require("./app")); //app exportada en app.ts
//Ejecutamos la conexion a la BBDD antes de escuchar al server
require("./database");
let server = require('http').createServer(app_1.default);
let io = require('socket.io')(server);
io.on('connection', (socket) => {
    console.log(socket);
    socket.on('disconnect', function () {
        io.emit('users-changed', { user: socket.username, event: 'left' });
    });
    socket.on('set-name', (name) => {
        socket.username = name;
        io.emit('users-changed', { user: name, event: 'joined' });
    });
    socket.on('send-message', (message) => {
        io.emit('message', { msg: message.text, user: socket.username, createdAt: new Date() });
    });
});
app_1.default.listen(app_1.default.get('port')); //Recuperamos puerto de app.ts
console.log('Server in port', app_1.default.get('port'));
