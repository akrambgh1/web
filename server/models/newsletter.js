const mongoose = require('mongoose');

const newsLetterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address.'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Newsletter', newsLetterSchema);
