const express = require('express');
const mongoose = require('mongoose');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = process.env.PORT || 5000;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const textController = require('./controllers/textController');

mongoose.connect('mongodb://OmegaSpace:Codesmith124@ds143099.mlab.com:43099/omegaspace')

//things coming in from /api instead of /
app.post('/api/savetext', textController.saveText);

io.on('connection', function (socket) {

    io.emit('userConnected', 'user connected');

    socket.on('disconnect', function () {
        io.emit('userDisconnected', 'user disconnected');
    });

    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});


//things coming in from /api instead of /
app.post('/api/savetext', textController.saveText);

app.get('/api/gettext', textController.getText);

app.listen(port, () => console.log("Listening to Port: 5000"));

