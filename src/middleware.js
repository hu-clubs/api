const loglevel = require('loglevel');

// TODO might be good two have a separate field for user-friendly error messages
function handleError (err, req, res, next) {
  loglevel.error(err);
  res.status(err.status || 500);
  res.json({
    'error': err.error
  });
}

module.exports = {
  handleError
};
