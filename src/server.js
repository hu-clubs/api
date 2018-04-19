const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const loglevel = require('loglevel');
const authenticationRouter = require('./authentication/routes');
const userRouter = require('./user/routes');
const clubRouter = require('./club/routes');
const middleware = require('./middleware');

require('./mongoose');

let app = express();

loglevel.setLevel('trace');

(function registerMiddleware () {
  app.use(morgan('dev'));
  app.use(bodyparser.json());
})();

(function registerRoutes () {
  app.use('/api/authentication', authenticationRouter);
  app.use('/api/user', userRouter);
  app.use('/api/club', clubRouter);
})();

(function registerErrorHandlers () {
  app.use(middleware.handleError);
})();

app.listen(8080, () => {
  loglevel.info('Express listening on port 8080');
});
