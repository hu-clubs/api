const UserModel = require('./model');

async function getUserFromParameter (req, res, next, userId) {
  try {
    let user = await UserModel.findOne({'_id': userId});
    if (user) {
      res.locals.user = user;
      next();
    } else {
      res.status(400);
      res.json({'message': 'User not found'});
    }
  } catch (err) {
    res.status(500);
    res.json({'message': err});
  }
}

module.exports = {
  getUserFromParameter
};
