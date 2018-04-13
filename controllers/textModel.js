const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const textSchema = new Schema ({
  version: Number,
  page: String
})






// Schema for when we add more pages

// const textSchema = new Schema ({
//   page1: String,
//   page2: String,
//   page3: String,
//   page4: String,
//   page5: String
// })


const Text = mongoose.model('Text', textSchema)

module.exports = Text;