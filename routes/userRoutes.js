const express = require('express');
const { registerUser } = require('../controllers/userController');
const { loginUser } = require('../controllers/userController');
const userRegistrationValidator = require('../validators/userValidator');
const userLoginValidator = require('../validators/userLoginValidator');
const router = express.Router();

// Register Route
router.post('/register', userRegistrationValidator, registerUser);

// Login Route
router.post('/sign-in', userLoginValidator, loginUser);

module.exports = router;
