const mongoose = require('mongoose');

let policySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  statements: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Statement'
  }]
});

let policyModel = mongoose.model('Policy', policySchema);

module.exports = policyModel;
