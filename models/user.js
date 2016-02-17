var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, match: /\S+@\S+\.\S+/ },
  phone: { type: String, required: 'Add the phone' },
  password: { type: String, required: true },
  company: { type: String },
  department: { type: String },
  position: { type: String }
});

module.exports = mongoose.model('User', userSchema);
