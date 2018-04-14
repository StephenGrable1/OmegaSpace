const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const textController = require('./controllers/textController');
mongoose.connect('mongodb://OmegaSpace:Codesmith124@ds143099.mlab.com:43099/omegaspace');

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});

//things coming in from /api instead of /
app.post('/api/savetext', textController.saveText);

//things coming in from /api instead of /
app.post('/api/savetext', textController.saveText);

app.get('/api/gettext', textController.getText);

app.listen(port, () => console.log("Listening to Port: 5000"));

