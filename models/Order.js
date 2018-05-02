var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    item: String,
    quantity: String,
    joborderno: String,
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date },
  });

  module.exports = mongoose.model('Order', OrderSchema);