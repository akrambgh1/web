const NewsletterModel = require('../models/newsletter');

// Add new email to the newsletter
const addNewsletterEmail = async (req, res) => {
  try {
    const email = req.body.email?.trim().toLowerCase();

    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    // Check if the email already exists
    const existing = await NewsletterModel.findOne({ email }).lean();
    if (existing) {
      return res.status(409).json({ error: 'This email is already subscribed.' });
    }

    // Save new email
    await NewsletterModel.create({ email });
    return res.status(201).json({ message: 'Email submitted successfully!' });

  } catch (error) {
    console.error('Error saving newsletter email:', error);
    return res.status(500).json({ error: 'Server error while saving form data.' });
  }
};

// Fetch all newsletter emails
const getNewsletterEmails = async (req, res) => {
  try {
    const letters = await NewsletterModel.find({})
      .sort({ createdAt: -1 })
      .lean(); // lean() returns plain JS objects, faster than Mongoose docs
    return res.status(200).json(letters);

  } catch (error) {
    console.error('Error fetching newsletter emails:', error);
    return res.status(500).json({ error: 'Failed to fetch newsletter emails.' });
  }
};

module.exports = { addNewsletterEmail, getNewsletterEmails };
