import socketClient from 'socket.io-client';
import DrawingApp from '../drawingApp/draw.js';
const connection = socketClient();
const drawing = DrawingApp(document.getElementById('drawingboard'));

connection.emit('isClient');


document.addEventListener('mousedown', event => {
  drawing.start({x:event.pageX, y:event.pageY});
});

document.addEventListener('mousemove', event => {
  drawing.draw({x:event.pageX, y:event.pageY});
  connection.emit('position', {x:event.pageX, y:event.pageY});
});

document.addEventListener('mouseup', event => {
  drawing.stop();
});


