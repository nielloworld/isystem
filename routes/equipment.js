var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Equipment = require('../models/Equipment.js');

/* GET ALL EquipmentS */
router.get('/', function(req, res, next) {
    Equipment.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });
  
  /* GET SINGLE Equipment BY ID */
  router.get('/:id', function(req, res, next) {
    Equipment.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* SAVE Equipment */
  router.post('/', function(req, res, next) {
    Equipment.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* UPDATE Equipment */
  router.put('/:id', function(req, res, next) {
    Equipment.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE Equipment */
  router.delete('/:id', function(req, res, next) {
    Equipment.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  module.exports = router;