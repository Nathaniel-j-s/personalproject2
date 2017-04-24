const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const RoomSchema = mongoose.Schema({
  prop: {type: String, required: true},
  title: {type: String, required: true},
  price: {type: String, required: true},
  beds: {type: String, required: true},
  occupants: {type: Number, required: true},
  smoking: {type: String, required: true},
  pets: {type: String, required: true},
  additional: {type: String, required: true}
});

const Room = module.exports = mongoose.model('Room', RoomSchema);

module.exports.getRooms = function(callback) {
  Room.find(callback);
}

module.exports.getRoomsByProp = function(prop, callback) {
  Room.find(prop, callback);
}

module.exports.getRoomDetails = function(id, callback) {
  const query = {_id: id}
  Room.findOne(query, callback);
}

module.exports.addRoom = function(newRoom, callback) {
  newRoom.save(callback);
}

module.exports.updateRoom = function(id, newRoom, callback) {
  Room.findOneAndUpdate({_id:id}, newRoom, {new: true}, callback);
}

module.exports.deleteRoom = function(id, callback) {
  const query = {_id: id}
  Room.findOne(query).remove(callback);
}
