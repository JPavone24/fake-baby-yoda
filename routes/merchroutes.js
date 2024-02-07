var express = require('express');
var fs = require("fs")
var router = express.Router();
var path = require("path")
let merch = require('../models/merch.model');

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname,  '../public/merch/merch.html'));
});


router.get("/mugs", function(req, res) {
  res.sendFile(path.join(__dirname,  '../public/merch/mugs.html'));
});

router.get("/art", function(req, res) {
  res.sendFile(path.join(__dirname,  '../public/merch/art.html'));
});

router.get("/fashion", function(req, res) {
  res.sendFile(path.join(__dirname,  '../public/merch/fashion.html'));
});

router.get("/toys", function(req, res) {
  res.sendFile(path.join(__dirname,  '../public/merch/toys.html'));
});
   
router.get("/cart", function(req, res) {
  console.log(req.body) 
  res.send(req.body)
});
   
router.get("/sellers", function(req, res) {
  res.sendFile(path.join(__dirname,  '../public/merch/sellers.html'));
});

router.post("/cart", function(req, res) {
  console.log(req.body) 
  res.send(req.body)
});





  module.exports = router;