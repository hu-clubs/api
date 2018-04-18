const UserModel = require('./model');

async function addUser (req, res, next) {
  let user = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    hNumber: req.body.hNumber,
    password: req.body.password
  });

  try {
    user = await user.save();
    res.send(user);
  } catch (err) {
    res.status(500);
    res.json({'message': err});
  }
}

async function getUsers (req, res, next) {
  try {
    let users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.status(500);
    res.json({'message': err});
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
  try {
    user = await user.save();
    res.json(user);
  } catch (err) {
    res.status(500);
    res.json({'message': err});
  }
}

async function deleteUser (req, res, next) {
  try {
    let user = await res.locals.user.remove();
    res.json(user);
  } catch (err) {
    res.status(500);
    res.json({'message': err});
  }
}

module.exports = {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};
