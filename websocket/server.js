var io = require('socket.io')();

io.on('connection', (client) => {
    client.on('subscribeToText', (text) => {
        console.log('client is subscribing to text with interval ', text);
        client.emit('subscribeToText', text);
    });
});

io.listen(8000);
