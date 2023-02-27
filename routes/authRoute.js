const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
require('dotenv').config()
const registeredUsers = require('../models/registeredUsers');


router.post('/signup',async(req,res)=>{
    const{username , email, password} = req.body;
    if(!username || !email || !password){
       return res.status(422).send({error : "Please fill all the fields"});
    }
    
    registeredUsers.findOne({Email : email})
    .then(
        async(saveduser)=>{
            if(saveduser){
                return res.status(422).send({error  : "User with same email already exists"});
            }
        }
    )
    registeredUsers.findOne({Username : username})
    .then(
        async(saveduser)=>{
            if(saveduser){
                return res.status(422).send({error  : "Username already exists"});
            }
            const newuser = registeredUsers();
            try{
                newuser.Username = username
                newuser.Email = email
                newuser.Password = password
                await newuser.save();
                res.send("User added")
            }catch(error){
                console.log('error');
            }
        }
    )
})

router.post('/login',(req,res)=>{
    const {username , password} = req.body;
    registeredUsers.findOne({Username : username})
    .then((saveduser)=>{
        if(saveduser){
            if(saveduser.Password === password){
                 res.send("True");
            }
            res.send("Wrong Password")
        }
        else{
            res.send("Such User Not found");
        }
    })
})



module.exports = router;