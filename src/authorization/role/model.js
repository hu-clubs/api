const mongoose = require('mongoose');

let roleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  policies: [{
    type: mongoose.Schema.types.ObjectId,
    ref: 'Policy',
  }]
});

let roleModel = mongoose.model('Role', roleSchema);

module.exports = roleModel;
