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

module.exports = {
  getUserFromParameter
};
