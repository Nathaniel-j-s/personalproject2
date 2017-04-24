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
    manager: req.body.manager,
    additional: req.body.additional
  });

  Prop.addProp(newProp, (err, prop) => {
    if(err) {
      res.json({success: false, msg:'Failed to register property.'});
    } else {
      res.json({success: true, msg:'Property registered.'});
    }
  });
});

router.put('/edit-prop', (req, res, next) => {
  let newProp = {
    name: req.body.name,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    type: req.body.type,
    manager: req.body.manager,
    additional: req.body.additional
  };

  Prop.updateProp(req.query._id, newProp, (err, prop) => {
    if (err) {
      res.json({success: false, msg:'Something went wrong with the edit.'});
    } else {
      res.json({success: true, msg:'Successfully edited property.'})
    }
  })
})

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

router.delete('/prop', (req, res, next) => {
  Prop.deleteProp(req.query._id, (err) => {
    if(err) {
      res.json({success: false, msg:'Failed to register prop.'});
    } else {
      res.json({success: true, msg:'Prop registered.'});
    }
  });
})

module.exports = router;
