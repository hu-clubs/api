const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  hNumber: {
    type: String
  },
  password: {
    type: String
  }
});

let UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
