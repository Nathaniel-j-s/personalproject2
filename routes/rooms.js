const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const Room = require('../models/room');

router.post('/add-room', (req, res, next) => {
  let newRoom = new Room({
    title: req.body.title,
    price: req.body.price,
    beds: req.body.beds,
    occupants: req.body.occupants,
    smoking: req.body.smoking,
    pets: req.body.pets,
    additional: req.body.additional
  });

  Room.addRoom(newRoom, (err, room) => {
    if(err) {
      res.json({success: false, msg:'Failed to register room.'});
    } else {
      res.json({success: true, msg:'Room registered.'});
    }
  });
});

router.get('/account', (req, res, next) => {
  Room.getRooms(function(err, room) {
    res.json(prop);
  });
});

router.get('/room', (req, res, next) => {
  Room.getRoomDetails(req.query.name, function(err, room) {
    res.json(room);
  });
});

module.exports = router;
