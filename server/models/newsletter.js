const mongoose = require('mongoose');

const newsLetterSchema = new mongoose.Schema({
      email:{
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address.'] // Optional email validation regex
      },
}, { timestamps: true });

module.exports = mongoose.model('newsletter', newsLetterSchema);
