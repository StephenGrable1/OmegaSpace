var express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', (client) => {

    client.on('toText', (text) => {
        client.broadcast.emit('subscribeToText', text);
        console.log("Inside websocket emitting to client: ", text);
    });

});

http.listen(8000, function () {
    console.log('listening on *:8000');
});