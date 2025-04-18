const newsLetterSchema = require("../models/newsletter");

const newsletter = async (req, res) => {
  const { email } = req.body;
  
  try {
    const newLetter = new newsLetterSchema({ email });
    await newLetter.save();

    // Emit real-time update (if needed)

    res.status(201).json({ message: 'Email submitted successfully!' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Server error while saving form data.' });
  }
};

const getNewsLetter = async (req, res) => {  // Fixed parameter name here
  try {
    const letters = await newsLetterSchema.find().sort({ createdAt: -1 }); // Sort by newest
    res.status(200).json(letters);
  } catch (error) {
    console.error('Error fetching forms:', error);
    res.status(500).json({ error: 'Failed to fetch forms.' });
  }
};

module.exports = { newsletter, getNewsLetter };
