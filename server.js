var express = require("express")
var app = express()
var path = require("path")
const mongoose = require('mongoose');
var fs = require("fs")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/merch"));
app.use(express.static(__dirname + "/public/pages"));


// app.set('view engine', 'ejs')
//mongo
require('dotenv').config();
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,  useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//routes

var htmlroutes = require('./routes/htmlroutes');
var apiroutes = require('./routes/postroutes');
var merchroutes = require('./routes/merchroutes');

app.use('/', htmlroutes);
app.use('/api', apiroutes);
app.use('/merch', merchroutes);

app.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});



