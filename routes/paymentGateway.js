const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const registeredUsers = require('../models/registeredUsers');
require('dotenv').config();


router.post('/paymentgateway',(req,res)=>{

    console.log("Thanish")
    res.send(req.body);
})

module.exports = router;