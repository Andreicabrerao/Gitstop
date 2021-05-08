const express = require('express');
const oauthController = require('../controllers/oauthController');
const dbController = require('../controllers/dbController');

const router = express.Router();

router.get('/', oauthController.authWithGithub, oauthController.verifyData, (req, res) => {
  res.status(200).json({ message: 'OAuth Success', token: token});
});

module.exports = router;
