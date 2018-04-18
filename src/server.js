const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const userRouter = require('./user/routes');
const loglevel = require('loglevel');
const mongoose = require('./mongoose');

let app = express();

loglevel.setLevel('trace');

app.use(morgan('dev'));

app.use(bodyparser.json());

app.use('/api/user', userRouter);

app.listen(8080, () => {
  loglevel.info('Express listening on port 8080');
});