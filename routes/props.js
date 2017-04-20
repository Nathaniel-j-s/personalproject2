const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const Prop = require('../models/prop');

router.post('/add-prop', (req, res, next) => {
  let newProp = new Prop({
    name: req.body.name,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
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

router.get('/account', (req, res, next) => {
  Prop.getProps(function(err, prop) {
    res.json(prop);
  });
});

module.exports = router;
