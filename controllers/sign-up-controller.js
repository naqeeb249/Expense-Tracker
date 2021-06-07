const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const User = require('../models/users');
const bcrypt = require('bcrypt');

exports.getSignUp = (req, res) => {
    res.sendFile(path.join(rootDir,'views','sign-up.html'));
}

exports.postSignUp = (req, res) => {
   const name = req.body.name;
   const email = req.body.email;
   const contact = req.body.number;
 //  const password = req.body.password;
  
   bcrypt.hash(req.body.password, 10, (err, encrypted) => {
       if(err)
       {
           return res.status(500).json({
               error : err
           })
       }
   // user.password = encrypted;
   else{

    User.create({
        name : name,
        email: email,
        contact : contact,
        password : encrypted
    }) .then(result => {
        res.send("<script>alert('User created'); window.location.href = '/sign-up' </script>);")
    })
    .catch(err =>res.send("<script>alert('User already exists'); window.location.href = '/sign-up' </script>);"));
   }

     })
    
  
       
  


}