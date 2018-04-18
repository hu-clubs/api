const express = require('express');
const controller = require('./controller');
const router = express.Router();

// Get user from parameter
// router.param('user');

// Add user
router.post('/', controller.addUser);

// List users
router.get('/', controller.getUsers);

// Get user details
// router.get('/:user');

// Update user
// router.patch('/:user');

// Delete user
// router.delete('/:user');

module.exports = router;
