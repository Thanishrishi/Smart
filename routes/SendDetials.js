const express = require("express");

const router = express.Router();
const mongoose = require('mongoose');
require('dotenv').config();
const registeredUsers = require('../models/registeredUsers');

router.post('/fetchdetials',(req,res)=>{
   const {username } = req.body;
   registeredUsers.findOne({Username : username})
   .then((saveduser)=>{
    res.send(saveduser);
   })
})

module.exports = router;