const UserModel = require('./model');

async function getUserFromParameter (req, res, next, userId) {
  try {
    let user = await UserModel.findOne({'_id': userId});
    if (user) {
      res.locals.user = user;
      next();
    } else {
      next({
        statusCode: 404,
        error: 'User not found'
      });
    }
  } catch (err) {
    next({
      statusCode: 500,
      error: err
    });
  }
}

async function registerUser (req, res, next) {
  // TODO load default role?
  let user = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    hNumber: req.body.hNumber,
    password: req.body.password,
    roles: [],
    confirmed: false
  });

  try {
    await user.save();
    res.locals.user = user;
    // TODO send confirmation email
  } catch (err) {
    next({
      statusCode: 500,
      error: err
    });
  }
}

module.exports = {
  getUserFromParameter,
  registerUser
};
