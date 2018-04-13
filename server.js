const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT || 5000;

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const textController = require('./controllers/textController')

mongoose.connect('mongodb://OmegaSpace:Codesmith124@ds143099.mlab.com:43099/omegaspace')

app.get('/', (req,res) => {
    res.json({hey: 'yoyoyo'});
})

//things coming in from /api instead of /
app.post('/api/test', (req, res) => {
    console.log(req.body)
    res.json({hi: `hey whats up from server got this ${req}`});
})


// app.get('/test', textController.getText)

// app.post('/test', textController.saveText)

// console.log('ids = ', textController.ids)


app.listen(port, () => console.log("Listening to Port: 5000"));

