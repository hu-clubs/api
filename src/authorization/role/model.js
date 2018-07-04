const mongoose = require('mongoose');

let roleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  policies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Policy'
  }]
});

let roleModel = mongoose.model('Role', roleSchema);

module.exports = roleModel;
