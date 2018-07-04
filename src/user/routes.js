const express = require('express');
const controller = require('./controller');
const middleware = require('./middleware');
const authenticationMiddleware = require('../authentication/middleware');
const authenticationController = require('../authentication/controller');
const router = express.Router();

// Middleware
router.param('userId', middleware.getUserFromParameter);

// Register user
router.post('/register', middleware.registerUser, authenticationController.sendJwt);

// Add user
router.post('/', controller.addUser);

// List users
router.get('/', authenticationMiddleware.authenticate, controller.getUsers);

// Get user details
router.get('/:userId', authenticationMiddleware.authenticate, controller.getUser);

// Update user
router.patch('/:userId', authenticationMiddleware.authenticate, controller.updateUser);

// Delete user
router.delete('/:userId', authenticationMiddleware.authenticate, controller.deleteUser);

module.exports = router;
