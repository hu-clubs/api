const UserModel = require('../user/model');

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
        res.status(403);
        res.json({'message': 'Invalid credentials'});
      }
    } else {
      res.status(404);
      res.json({'message': 'User not found'});
    }
  } catch (err) {
    res.status(500);
    res.json({'message': err});
  }
}

module.exports = {
  login
};
