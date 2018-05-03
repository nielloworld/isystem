var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    item: String,
    quantity: String,
    joborderno: {type: mongoose.Schema.Types.ObjectId, default : mongoose.Types.ObjectId },
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date },
  });

  module.exports = mongoose.model('Order', OrderSchema);