const express = require('express');
const mongoose = require('mongoose')
const app = express();
const textController = require('./controllers/textController')


app.get('/', (req,res) => {
    res.sendFile('');
})

mongoose.connect('mongodb://OmegaSpace:Codesmith124@ds143099.mlab.com:43099/omegaspace')






app.get('/test', textController.getText)

app.post('/test', textController.saveText)

console.log('ids = ', textController.ids)

app.listen(5000, () => console.log("Listening to Port: 5000"));