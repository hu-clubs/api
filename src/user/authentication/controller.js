const jwt = require('jsonwebtoken');
const config = require('../../config');

async function sendJwt (req, res, next) {
  let user = res.locals.user;
  let token = jwt.sign({'user': user._id}, config.jwtSecret, {
    issuer: config.jwtIssuer
  });
  res.json({'token': token});
}

module.exports = {
  sendJwt
};
