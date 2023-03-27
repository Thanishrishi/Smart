const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const registeredUsers = require('../models/registeredUsers');
require('dotenv').config();


router.post('/paymentgateway',(req,res)=>{
    console.log(req.data);
    res.send("success");
})

module.exports = router;