const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const RoomSchema = mongoose.Schema({
  title: {type: String, required: true},
  price: {type: String, required: true},
  beds: {type: String, required: true},
  occupants: {type: Number, required: true},
  smoking: {type: String, required: true},
  pets: {type: String, required: true},
  additional: {type: String, required: true}
});

const Room = module.exports = mongoose.model('Room', PropSchema);

module.exports.getRooms = function(callback) {
  Room.find(callback);
}

module.exports.getPropDetails = function(title, callback) {
  const query = {title: title}
  Room.findOne(query, callback);
}

module.exports.addRoom = function(newRoom, callback) {
  newRoom.save(callback);
}
