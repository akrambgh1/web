const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  userId:{
      name: { type: String, required: true },
      email: { type: String, required: true },
      message: { type: String },
  type: { type: String, },
  budget: { type: String, },
    },
  status: { type: String, default: 'pending' },

}, { timestamps: true });

module.exports = mongoose.model('FormData', formSchema);
