'use strict';

import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import path from 'path';
import pageLayout from './templates/page';

const app = express();
const server = http.createServer(app);
const socket = socketio.listen(server);
const port = 3333;

// host
app.get('', (req, res) => {
  res.send('this is the host');
});

// client
app.get('/client', (req, res) => {
  res.send(pageLayout('this is the content'));
});

server.listen(port, () => {
  console.log('application is running');
});
