const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const registeredUsers = require('../models/registeredUsers');
require('dotenv').config();


router.post('/paymentgateway',async(req,res)=>{
    const{username , amount , billdata } = req.body;
    console.log(billdata);

    res.send("successs")
})

module.exports = router;