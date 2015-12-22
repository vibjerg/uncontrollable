'use strict';

import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import path from 'path';
import pageLayout from './templates/page';

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);
const port = 3333;

const clients = [];
const host = {
  connection: null,
  isSet: false
};

io.on('connection', connection => {
  connection.on('isClient', () => activateClient(connection));
  connection.on('isHost', () => {
    console.log('host is added');
    host.connection = connection;
    host.isSet = true;
  });
});

function activateClient(client) {
  console.log('client is added');
  client.on('position', data => sendToHost('position', data));
}

function sendToHost(eventType, data) {
  console.log(eventType, data);
  if (host.isSet) {
    host.connection.emit(eventType, data);
  }
}

//statics
app.use('/public', express.static('public/'));

// host
app.get('', (req, res) => {
  res.send(pageLayout('watch the mouse move', '/public/js/host.js'));
});

// client
app.get('/client', (req, res) => {
  res.send(pageLayout('move the mouse', '/public/js/client.js'));
});

server.listen(port, () => {
  console.log('application is running');
});
