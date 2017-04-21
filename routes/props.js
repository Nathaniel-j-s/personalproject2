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

router.get('/prop', (req, res, next) => {
  Prop.getPropDetails(req.query.name, function(err, prop) {
    res.json(prop);
  });
});

router.post('/edit-prop', (req, res, next) => {
  let updatedProp = new Prop({
    name: req.body.name,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    type: req.body.type,
    manager: req.body.manager,
    additional: req.body.additional
  });

  console.log(updatedProp);

  Prop.updateProp(updatedProp, (err, prop) => {
    console.log(updatedProp);
    if(err) {
      res.json({success: false, msg:'Failed to edit property.'});
    } else {
      res.json({success: true, msg:'Property successfully edited.'});
    }
  });
});

module.exports = router;
