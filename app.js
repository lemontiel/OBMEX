const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require ('path');
const cors = require ('cors');
const passport = require ('passport');
const config = require('./config/database');

//Connect to Mongo through mongoose
mongoose.connect(config.database);

mongoose.connection.on('connected', () =>{
  console.log('Connected to database: ' + config.database);
});

mongoose.connection.on('error', (err) =>{
  console.log('Database error ' + err);
});


//Instance of express;
const app = express();

//Port number
const port = 3000;

//Users directory call
const users = require('./routes/users');

//MiddleWare
app.use(cors());
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);

//Get the index
app.get('/', (req, res) => {
  res.send("INDEX");
});

//Start Server
app.listen(port, () => {
  console.log("Server started on port: " + port);
});
