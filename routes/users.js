const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User')

mongoose.connect('mongodb://localhost/dbNew')

mongoose.connection.on('open',()=>{
  console.log("Connection OK");
});

mongoose.connection.on('error',(err)=>{
  console.log("Connection Fail",err);
});

router.post('/',(req,res,next)=>{
  const user = new User({
    username:'emre',
    name:'Emre',
    lastName:'Orhan',
    public:false,
    age:21
  })
  user.save((err,data)=>{
    if(err)
    console.log("error",err)
    res.json(data)
  })
})
/*
    You can try with Postman
    https://www.getpostman.com/
*/
module.exports = router;
