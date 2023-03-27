const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const registeredUsers = require('../models/registeredUsers');
const Bill = require('../models/Bill');
require('dotenv').config();


router.post('/paymentgateway',async(req,res)=>{
    const{username , amount , billdata } = req.body;
    registeredUsers.findOne({Username : username})
    .then(async(saveduser)=>{
        if(saveduser){
            console.log(saveduser);
            let wallet = saveduser.Wallet;
            wallet = parseInt(wallet);
            console.log(wallet + amount);
            if(wallet < amount){
                
                res.send("Insufficientfunds");
                return;
            }else{
                let reducedamount = wallet - amount;
                registeredUsers.updateOne({Username : username},{Wallet : reducedamount},(err,docs)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Updated " + docs);
                    }
                })
                const newbill =  Bill();
                try{
                    newbill.Name = username;
                    newbill.Totalamount = amount;
                    newbill.Items = billdata;
                   const ret =  await newbill.save();
       
                    res.send(ret._id);
                    return;
                }catch(error){
                    console.log(error);
                }
            }
        }else{
            console.log("usernotfound")
        }
    })

  
})

module.exports = router;