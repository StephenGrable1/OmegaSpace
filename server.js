const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.sendFile('');
})

app.listen(5000, () => console.log("Listening to Port: 5000"));