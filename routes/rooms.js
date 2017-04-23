const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const Room = require('../models/room');

router.post('/add-room', (req, res, next) => {
  let newRoom = new Room({
    prop: req.body.prop,
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
  Room.getRoomsByProp(req.query.prop, function(err, room) {
    res.json(room);
  });
});

router.get('/room', (req, res, next) => {
  Room.getRoomDetails(req.query.title, function(err, room) {
    res.json(room);
  });
});

module.exports = router;
