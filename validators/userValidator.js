const { body } = require('express-validator');

const userRegistrationValidator = [
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('phone_number').optional().isMobilePhone().withMessage('Please provide a valid phone number'),
];

module.exports = userRegistrationValidator;
