const loglevel = require('loglevel');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:32768/huclubs');

var connection = mongoose.connection;
connection.on('error', function () {
  loglevel.error('Error connecting to database');
});
connection.once('open', function () {
  loglevel.info('Connected to database');
});

module.exports = mongoose;
