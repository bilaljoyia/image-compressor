const mongoose = require('mongoose');

const ArticalPostSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }, 
  discripition: {
    type: String,
    required: true
  }
});

const ArticalPost = mongoose.model('ArticalPost', ArticalPostSchema);

module.exports = ArticalPost;
