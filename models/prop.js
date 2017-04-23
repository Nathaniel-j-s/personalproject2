const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const PropSchema = mongoose.Schema({
  name: {type: String, required: true},
  street: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  country: {type: String, required: true},
  type: {type: String, required: true},
  manager: {type: String, required: true},
  additional: {type: String, required: true}
});

const Prop = module.exports = mongoose.model('Prop', PropSchema);

module.exports.getProps = function(callback) {
  Prop.find(callback);
}

module.exports.getPropDetails = function(name, callback) {
  const query = {name: name}
  Prop.findOne(query, callback);
}

module.exports.addProp = function(newProp, callback) {
  newProp.save(callback);
}

module.exports.deleteProp = function(id, callback) {
  Prop.remove(id, callback);
}
