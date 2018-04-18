const jwt = require('jsonwebtoken');

async function sendJwt (req, res, next) {
  let user = res.locals.user;
  // TODO use a real secret
  let token = jwt.sign({'user': user._id}, 'secret');
  res.json({'token': token});
}

module.exports = {
  sendJwt
};
