const Text = require('./textModel');
const mongoose = require('mongoose');

const textController = {};

textController.ids = []
const text = new Text({page: 'most recentest'})


textController.getText = (req, res) => {
  Text.find({ "_id": "5ad0eca5f36d286a71b4e0ae" }, (err, text) => {
    // textController.ids.push(text[text.length - 1]._id)
  })
  res.send('shit found')
}


textController.saveText = (req, res) => {
   Text.findOne({ "_id": "5ad0eca5f36d286a71b4e0ae"}, function (err, foundText) {
    if (err) return console.log(err,'this is the first error');
  
    foundText.page = 'newest text';
    foundText.save(function (err, updatedText) {
      if (err) return console.log(err, 'this is the second error');
      res.send(updatedText);
    });
  });
}
  


module.exports = textController;