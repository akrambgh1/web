const newsLetterSchema = require("../models/newsletter")


const newsletter= async (req, res) => {
    const { email } = req.body
     try {
        const newletter = new newsLetterSchema({email});
    
        await newletter.save();
    
     
    
        // Emit real-time update
      
    
        res.status(201).json({ message: 'Email submitted successfully!' });
      } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ error: 'Server error while saving form data.' });
      }
    };

module.exports = newsletter;