const express = require('express');
const router = express.Router();
const { submitForm,getAllForms, updateFormStatus } = require('../controllers/formController');
const cors = require('cors');
router.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));
  

router.post('/', submitForm);
router.get('/', getAllForms);
router.put('/status', updateFormStatus);

  

module.exports = router;
