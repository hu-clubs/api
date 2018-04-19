const mongoose = require('mongoose');

let statementSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  resource: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  effect: {
    type: String,
    enum: ['ALLOW', 'DENY'],
    required: true
  },
  action: {
    type: String,
    required: true
  }
});

let statementModel = mongoose.model('Statement', statementSchema);

module.exports = statementModel;
