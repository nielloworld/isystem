var mongoose = require('mongoose');

var EquipmentSchema = new mongoose.Schema({
    item: String,
    quantity: String,
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date },
  });

  module.exports = mongoose.model('Equipment', EquipmentSchema);