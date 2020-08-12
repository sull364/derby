const express = require('express');

const derbylistingController = require('./derbylistingController');

const router = express.Router();

router.get('/', derbylistingController.getLeagues, (req, res) => res.status(200).json(res.locals.leagues));

module.exports = router;
