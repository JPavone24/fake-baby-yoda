var express = require('express');
var router = express.Router();
var path = require("path")


router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,  'public/pages/index.html'));
  });

router.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/pages/login.html'));
});

router.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/pages/register.html'));
});
  
router.get("/memes", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/pages/memes.html'));
});

router.get("/videos", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/pages/videos.html'));
});

router.get("/news", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/pages/news.html'));
});


router.get("/chat", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/pages/chat.html'));
});
router.get("/checkout", function(req, res) {
    res.sendFile(path.join(__dirname,  '../public/pages/checkout.html'));
});



router.post("/chat", function(req, res) {
    console.log("chat route sucessful")
    console.log(req.body)
    res.send(req.body)
  });
 
  
  router.post("/cart", function(req, res) {
    if (err){
      res.send(err)
    }
    else{
    console.log(req.body)
    res.JSON(req.body)
    }
  });

  router.get("/cart", function(req, res) {
    res.send(req.body)
  });


  module.exports = router;