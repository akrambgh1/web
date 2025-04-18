const newsLetterSchema = require("../models/newsletter");

const newsletter = async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
  
    try {
      const newLetter = new newsLetterSchema({ email });
      await newLetter.save();
      res.status(201).json({ message: 'Email submitted successfully!' });
    } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({ error: 'Server error while saving form data.' });
    }
  };
  

  const getNewsLetter = async (req, res) => {
    try {
      // Fetch the emails, sorting them by creation date
      const letters = await newsLetterSchema.find().sort({ createdAt: -1 }); // Sort by newest first
      res.status(200).json(letters);
    } catch (error) {
      console.error('Error fetching letters:', error); // Log the error for debugging
      res.status(500).json({ error: 'Failed to fetch letters from the database.' });
    }
  };
  module.exports = { newsletter, getNewsLetter  };

