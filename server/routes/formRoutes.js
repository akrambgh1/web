const express = require('express');
const router = express.Router();
const { submitForm, getAllForms, updateFormStatus } = require('../controllers/formController');
const {newsLetter} =require("../controllers/newsletterController")
const cors = require('cors');
router.use(cors({
    origin: [ 'https://web-pi-pied.vercel.app' ,"https://web-taw6.vercel.app"],
    credentials: true
  }));
  

router.post('/', submitForm);

router.get('/admin', getAllForms);
router.put('/status', updateFormStatus);
router.post('/emails', newsLetter);

  

module.exports = router;
