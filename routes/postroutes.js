var express = require('express');
var router = express.Router();
let register = require('../models/register.model');
let merch = require('../models/merch.model');
var fs = require("fs")

// router.post("/register", function(req, res) {
// // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
// register.findOne({ 'email': req.body.email }, function (err, person) {
//   if (err) return handleError(err);
//   if (person === "null"){
//     const newUser = new register({
//       name,
//       username,
//       email,
//       password,
//     });
//     console.log(newUser)
//     newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
//   }
//   else{
//     res.send("we already have an email with that adress in our database")
//   }
//   });
// });

router.get("/all", function(req, res) {
  merch.find({}).then(function(products){
    var string = JSON.stringify(products)
    res.send(string)
  })
});   
  
router.get("/:id", function(req, res) {
   merch.find({department: req.params.id}).then(function(products){
    res.send(products)
  })
});

router.post("/", function(req, res) {
    console.log(req.body)
    const newSeller = new merch({
    
      nameOfSeller : req.body.nameOfSeller,
      nameOfProduct: req.body.nameOfProduct,
      price: req.body.price,
      quantity: req.body.quantity,
      department: req.body.department,
      img: req.body.img,
      description: req.body.description
    });
    newSeller.save(function (err) {
      if (err){
        console.log(err)
      }
    });
  });

   

 
  
module.exports = router;