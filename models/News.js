const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  catid: { type: String,ref:"Category" ,required: true },
  image: String,
  createdon: { type: Date, default: Date.now }
});

module.exports = mongoose.model('News', newsSchema);