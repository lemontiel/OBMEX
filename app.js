const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require ('path');
const cors = require ('cors');
const passport = require ('passport');



//Instance of express;
const app = express();

//Port number
const port = 3000;

const users = require('./routes/users');

//Connect to Mongo through mongoose
mongoose.connect('mongodb://localhost/SolSillas');
const db = mongoose.connection;

//MiddleWare
app.use(cors());
app.use(bodyParser.json());

app.use('/users', users);

//Get the index
app.get('/', (req, res) => {
  res.send("INDEX");
});

//Start Server
app.listen(port, () => {
  console.log("Server started on port: " + port);
});
