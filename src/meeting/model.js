const mongoose = require('mongoose');
const point = require('./point/model');

let meetingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  notes: {
    type: String
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  location: {
    type: point.pointSchema
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }]
});

let MeetingModel = mongoose.model('Meeting', meetingSchema);

module.exports = MeetingModel;
