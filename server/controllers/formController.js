const dns = require('dns');
const formSchema = require('../models/FormData');

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function checkDomain(domain) {
  return new Promise((resolve, reject) => {
    dns.resolveMx(domain, (err, addresses) => {
      if (err || !addresses || addresses.length === 0) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

const submitForm = async (req, res) => {
  const { name, email, message, type, budget } = req.body;

  if (!name || !email  || !type || !budget) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  const domain = email.split('@')[1];
  const isDomainValid = await checkDomain(domain);

  if (!isDomainValid) {
    return res.status(400).json({ error: 'Email domain is not valid.' });
  }

  try {
    const newForm = new formSchema({
      userId: { name, email, message, type, budget }
    });

    await newForm.save();

    console.log('Form Data Received:', { name, email, message, type, budget });

    // Emit real-time update
    req.io.emit('newForm', {
      name,
      email,
      message,
      type,
      budget
    });

    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Server error while saving form data.' });
  }
};
const getAllForms = async (req, res) => {
  try {
    const forms = await formSchema.find().sort({ createdAt: -1 }); // Sort by newest
    res.status(200).json(forms);
  } catch (error) {
    console.error('Error fetching forms:', error);
    res.status(500).json({ error: 'Failed to fetch forms.' });
  }
};
const validStatuses = ['pending', 'in progress', 'finished', 'archived'];

const updateFormStatus = async (req, res) => {
  const { formId, status } = req.body;

  if (!formId || !status) {
    return res.status(400).json({ error: 'Form ID and status are required.' });
  }

  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Invalid status.' });
  }

  try {
    const updatedForm = await formSchema.findByIdAndUpdate(
      formId,
      { status },
      { new: true }
    );
    res.status(200).json(updatedForm);
  } catch (error) {
    console.error('Error updating form status:', error);
    res.status(500).json({ error: 'Server error while updating form status.' });
  }
};


module.exports = { submitForm, getAllForms ,updateFormStatus };


