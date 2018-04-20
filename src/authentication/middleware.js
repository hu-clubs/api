const jwt = require('jsonwebtoken');
const UserModel = require('../user/model');

async function authenticate (req, res, next) {
  let token = req.header('Authorization');
  // TODO use real secret
  // TODO use real issuer
  try {
    token = await jwt.verify(token, 'secret', {
      issuer: 'hu-clubs'
    });
    try {
      res.locals.auth = {
        user: await UserModel.findOne({'_id': token.user})
      };
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
          error: 'Invalid password'
        });
      }
    } else {
      next({
        status: 404,
        error: 'User not found'
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
