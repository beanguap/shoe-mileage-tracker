const mongoose = require('mongoose');

const RunSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  shoeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shoe' },
  distance: Number,
  date: Date,
});

module.exports = mongoose.model('Run', RunSchema);
