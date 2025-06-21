const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  specialization: {
    type: String,
    required: true
  },
  profileImage: {
    type: String
  }
});

const Trainer = mongoose.model('Trainer', trainerSchema);
module.exports = Trainer;
