const Newsletter = require('../models/newsletter'); // Capital N because it's a model

// Add a new email to newsletter
const newsletter = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // optional: check for existing email first
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: 'This email is already subscribed.' });
    }

    const newLetter = new Newsletter({ email });
    await newLetter.save();
    res.status(201).json({ message: 'Email submitted successfully!' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Server error while saving form data.' });
  }
};

// Fetch all the emails
const getNewsLetter = async (req, res) => {
  try {
    const letters = await Newsletter.find().sort({ createdAt: -1 });
    res.status(200).json(letters);
  } catch (error) {
    console.error('Error fetching letters:', error);
    res.status(500).json({ error: 'Failed to fetch letters from the database.' });
  }
};

module.exports = { newsletter, getNewsLetter };
