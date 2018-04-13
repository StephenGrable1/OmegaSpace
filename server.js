const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.json({hey: 'yoyoyo'});
})

app.post('/api/test', (req, res) => {
    console.log(req.body)
    res.json({hi: `hey whats up from server got this ${req}`});
})

app.listen(port, () => console.log("Listening to Port: 5000"));