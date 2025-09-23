const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true, // still enforces uniqueness in DB
      trim: true,   // optional: trims spaces but keeps case
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address.'], // regex validation
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// optional explicit unique index
newsletterSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('Newsletter', newsletterSchema);
