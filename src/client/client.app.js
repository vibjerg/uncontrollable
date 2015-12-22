import socketClient from 'socket.io-client';

const connection = socketClient();

connection.emit('isClient');

document.addEventListener('mousemove', event => {
  console.log(event);
  connection.emit('position', {x:event.pageX, y:event.pageY});
});