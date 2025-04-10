const mongoose = require('mongoose');

const apiSchema = mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
  });
  const Api = mongoose.model('Api', apiSchema);
  module.exports = Api;