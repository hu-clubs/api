const UserModel = require('./model');

async function addUser (req, res, next) {
  let user = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    hNumber: req.body.hNumber,
    password: req.body.password,
    roles: req.body.roles,
    confirmed: req.body.confirmed
  });

  try {
    user = await user.save();
    res.send(user);
  } catch (err) {
    next({
      statusCode: 500,
      error: err
    });
  }
}

async function getUsers (req, res, next) {
  try {
    let users = await UserModel.find();
    res.json(users);
  } catch (err) {
    next({
      statusCode: 500,
      error: err
    });
  }
}

async function getUser (req, res, next) {
  res.json(res.locals.user);
}

async function updateUser (req, res, next) {
  let user = res.locals.user;
  user.firstName = req.body.firstName || user.firstName;
  user.lastName = req.body.lastName || user.lastName;
  user.email = req.body.email || user.email;
  user.hNumber = req.body.hNumber || user.hNumber;
  user.password = req.body.password || user.password;
  user.roles = req.body.roles || user.roles;
  user.confirmed = req.body.confirmed || user.confirmed;
  try {
    user = await user.save();
    res.json(user);
  } catch (err) {
    next({
      statusCode: 500,
      error: err
    });
  }
}

async function deleteUser (req, res, next) {
  try {
    let user = await res.locals.user.remove();
    res.json(user);
  } catch (err) {
    next({
      statusCode: 500,
      error: err
    });
  }
}

module.exports = {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};
