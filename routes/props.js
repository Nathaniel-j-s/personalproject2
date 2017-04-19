const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const Prop = require('../models/prop');

router.post('/add-prop', (req, res, next) => {
  let newProp = new Prop({
    name: req.body.name,
    address: {
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country
    },
    type: req.body.type,
    manager: req.body.manager
  });

  Prop.addProp(newProp, (err, prop) => {
    if(err) {
      res.json({success: false, msg:'Failed to register prop.'});
    } else {
      res.json({success: true, msg:'Prop registered.'});
    }
  });
});

router.get('/prop', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({prop: req.prop});
});

module.exports = router;
