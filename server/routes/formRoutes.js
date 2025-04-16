const express = require('express');
const router = express.Router();
const { submitForm,getAllForms, updateFormStatus } = require('../controllers/formController');
const cors = require('cors');
router.use(cors({
    origin: 'https://weblocators-frontend.onrender.com',
    credentials: true
  }));
  

router.post('/', submitForm);
router.get('/', getAllForms);
router.put('/status', updateFormStatus);

  

module.exports = router;
