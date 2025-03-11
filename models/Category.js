const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  catname: { type: String, required: true }
});

module.exports = mongoose.model('Category', categorySchema);