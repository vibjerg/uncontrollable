import socketClient from 'socket.io-client';

const connection = socketClient();

connection.emit('isHost');

connection.on('position', data => console.log(data));