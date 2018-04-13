const Text = require('./textModel');
const mongoose = require('mongoose');

const textController = {};

textController.ids = []
const text = new Text({ page: 'most recentest' })


textController.getText = (req, res) => {
  console.log('trying to get text')
  Text.find({ "_id": "5ad0eca5f36d286a71b4e0ae" }, (err, text) => {

    console.log('This is text', text[0].page)
    res.send(JSON.stringify(text[0].page));
  });
};


textController.saveText = (req, res) => {
  Text.findOne({ "_id": "5ad0eca5f36d286a71b4e0ae" }, function (err, foundText) {
    if (err) return console.log(err, 'this is the first error');

    foundText.page = req.body.text;
    foundText.save(function (err, updatedText) {
      if (err) return console.log(err, 'this is the second error');
      res.send(updatedText);
    });
  });
};



module.exports = textController;