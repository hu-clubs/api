const mongoose = require('mongoose');

let pointSchema = mongoose.Schema({
  type: String,
  coordinates: [Number]
});

let pointModel = mongoose.model('Point', pointSchema);

module.exports = {
  pointSchema,
  pointModel
};
