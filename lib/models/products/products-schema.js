'use strict'; 

const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  name: {type: String, required: true},
  display_name: {type: String, required: true},
  description: {type: String, required: true},
  category: {type: String, required: true},
});

module.exports = mongoose.model('productsSchema', productsSchema);
