const jwt = require('jsonwebtoken');

async function sendJwt (req, res, next) {
  let user = res.locals.user;
  // TODO use a real secret
  // TODO use a real issuer
  let token = jwt.sign({'user': user._id}, 'secret', {
    issuer: 'hu-clubs'
  });
  res.json({'token': token});
}

module.exports = {
  sendJwt
};
