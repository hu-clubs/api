const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const loglevel = require('loglevel');
const cors = require('cors');

const authenticationRouter = require('./authentication/routes');
const userRouter = require('./user/routes');
const clubRouter = require('./club/routes');
const meetingRouter = require('./meeting/routes');
const middleware = require('./middleware');

require('./mongoose');

let app = express();

loglevel.setLevel('trace');

(function registerMiddleware () {
  app.options('*', cors({
    origin: 'http://localhost:3000',
    allowedHeaders: 'Authorization, Content-Type',
    credentials: true
  }));
  app.use(cors({
    origin: 'http://localhost:3000',
    allowedHeaders: 'Authorization, Content-Type',
    credentials: true
  }));
  app.use(morgan('dev'));
  app.use(bodyparser.json());
})();

(function registerRoutes () {
  app.use('/api/authentication', authenticationRouter);
  app.use('/api/user', userRouter);
  app.use('/api/club', clubRouter);
  app.use('/api/meeting', meetingRouter);
})();

(function registerErrorHandlers () {
  app.use(middleware.handleError);
})();

app.listen(8080, () => {
  loglevel.info('Express listening on port 8080');
});
