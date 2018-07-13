const jwt = require('jsonwebtoken');
const UserModel = require('../model');
const config = require('../../config');

async function authenticate (req, res, next) {
  let token = req.header('Authorization');
  try {
    token = await jwt.verify(token, config.jwtSecret, {
      issuer: config.jwtIssuer
    });
    try {
      let user = await UserModel.findOne({'_id': token.user});
      res.locals.auth = {
        user
      };
      if (user === null) {
        next({
          status: 400,
          error: 'Invalid authentication token. User does not exist.'
        });
      }
      next();
    } catch (err) {
      next({
        status: 400,
        error: err
      });
    }
  } catch (err) {
    next({
      status: 400,
      error: err
    });
  }
}

async function login (req, res, next) {
  let email = req.body.email;
  let password = req.body.password;

  try {
    let user = await UserModel.findOne({'email': email});
    if (user) {
      if (await user.authenticate(password)) {
        res.locals.user = user;
        next();
      } else {
        next({
          status: 401,
          error: {
            name: 'Invalid password'
          }
        });
      }
    } else {
      next({
        status: 404,
        error: {
          name: 'User not found'
        }
      });
    }
  } catch (err) {
    next({
      status: 500,
      error: err
    });
  }
}

module.exports = {
  authenticate,
  login
};
