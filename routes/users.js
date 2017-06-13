const express = require ('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
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
  const username = req.body.username;
  const password = req.body.password;
  
  User.getUserByUsername(username, (err, user) =>{
      if(err) console.log(err);
      if(!user){
        return res.json({success : false, msg : "Usuario no encontrado"});
      }
      User.comparePassword(password, user.password, (err, isMatch) =>{
        if(err) console.log(err);
        if(isMatch){
          const token = jwt.sign(user, config.secret, {
            expiresIn : 32400 //9 hours in seconds
          });
          res.json({
            success : true,
            token : 'JWT ' + token,
            user : {
              id : user._id,
              name : user.name,
              username : user.username,
              email : user.email
            }
          });
        }
        else {
          return res.json({success : false, msg : 'Contraseña incorrecta'});
        }
      });
  });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session : false}), (req, res, next) => {
  res.json({user : req.user});
});

module.exports = router;
