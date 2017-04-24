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

router.put('/edit-room', (req, res, next) => {
  let newRoom = {
    prop: req.body.prop,
    title: req.body.title,
    price: req.body.price,
    beds: req.body.beds,
    occupants: req.body.occupants,
    smoking: req.body.smoking,
    pets: req.body.pets,
    additional: req.body.additional
  };

  Room.updateRoom(req.query._id, newRoom, (err, room) => {
    if (err) {
      res.json({success: false, msg:'Something went wrong with the edit.'});
    } else {
      res.json({success: true, msg:'Successfully edited unit.'})
    }
  })
})

router.get('/account', (req, res, next) => {
  Room.getRoomsByProp(req.query.prop, function(err, room) {
    res.json(room);
  });
});

router.get('/room', (req, res, next) => {
  Room.getRoomDetails(req.query._id, function(err, room) {
    res.json(room);
  });
});

router.delete('/room', (req, res, next) => {
  Room.deleteRoom(req.query._id, (err) => {
    if(err) {
      res.json({success: false, msg:'Failed to delete room.'});
    } else {
      res.json({success: true, msg:'Room deleted.'});
    }
  });
})

module.exports = router;
