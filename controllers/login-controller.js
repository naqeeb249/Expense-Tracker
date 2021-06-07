const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.getLogin = (req,res,next) => {
    res.sendFile(path.join(rootDir,'views','login.html'));
}

exports.postLogin = (req,res,next) => {
  User.findAll({where : {email : req.body.email}})
  .then(user => {
      if(user.length < 1)
      {
          return res.status(401).json({
              message : 'Auth Failed'
          })
      }
      else{
          bcrypt.compare(req.body.password,user[0].password,(err,result) => {
              if(err)
              {
                  return res.status(401).json({
                      message : 'Auth Failed'
                  })
              }
              if(result)
              {
                  const token = jwt.sign({
                      email : user[0].email,
                      id : user[0].id
                  },process.env.jwt,{
                    expiresIn : '1h'
                  });
                 return res.status(200).json({
                      message : 'Auth Succuessful',
                      token : token
                  })
              }
              return res.status(401).json({
                message : 'Auth Failed'
            })
              
          })
      }
  })
}