const express = require('express');
const controller = require('./controller');
const middleware = require('./middleware');
const router = express.Router();

// Middleware
router.param('userId', middleware.getUserFromParameter);

// Add user
router.post('/', controller.addUser);

// List users
router.get('/', controller.getUsers);

// Get user details
router.get('/:userId', controller.getUser);

// Update user
router.patch('/:userId', controller.updateUser);

// Delete user
router.delete('/:userId', controller.deleteUser);

module.exports = router;
