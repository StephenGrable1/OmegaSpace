var express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var io = require('socket.io')();

io.on('connection', (client) => {
    client.on('subscribeToText', (text) => {
        // console.log('client is subscribing to text with interval ', text);
        client.broadcast.emit('subscribeToText', text);
    });
});

// io.listen(8000);

http.listen(8000, function () {
    console.log('listening on *:8000');
});