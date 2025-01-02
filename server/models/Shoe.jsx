const mongoose = require('mongoose');

const ShoeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  brand: String,
  model: String,
  recommendedMiles: Number,
  currentMiles: { type: Number, default: 0 },
});

module.exports = mongoose.model('Shoe', ShoeSchema);
