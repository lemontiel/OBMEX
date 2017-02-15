const express = require ('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
  var newUser = new User({
    name : req.body.name,
    email : req.body.email,
    username : req.body.username,
    password : req.body.password
  });

  User.addUser(newUser, (err, user) =>{
    if(err){
      res.json({success : false, msg : "Fallo al registrar usuario"});
    }
    else {
      res.json({success : true, msg : "Usuario registrado"});
    }
  });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
res.send('AUTHENTICATE');
});

//Profile
router.get('/profile', (req, res, next) => {
res.send('PROFILE');
});

module.exports = router;
