const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require ('path');
const cors = require ('cors');
const passport = require ('passport');



//Instance of express;
const app = express();
const port = 3000;

//Connect to Mongo through mongoose
mongoose.connect('mongodb://localhost/SolSillas');
var db = mongoose.connection;

app.get('/', (req, res) => {
  res.send("Hello this is a place holder");
});


app.listen(port, => {
  console.log("Server started on port: " + port);
});
