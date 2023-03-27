const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const registeredUsers = require('../models/registeredUsers');
require('dotenv').config();


router.post('/paymentgateway',async(req,res)=>{
    const{username , amount , billdata } = req.body;
    registeredUsers.findOne({Username : username})
    .then((saveduser)=>{
        let wallet = saveduser.Wallet;
        if(wallet < amount){
            res.send("Insufficientfunds");
            return;
        }
    })

    res.send("successs")
})

module.exports = router;