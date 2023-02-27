const bodyparser = require('body-parser')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const registeredUsers = require('./models/registeredUsers');
require('dotenv').config()
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI,(error)=>{
    if(error) console.log(error);
    else console.log("Database Connected");
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/',(req,res)=>{
    res.json("success");
})

app.get('/get',async(req,res)=>{
   const thanish  = registeredUsers();
   try{

       thanish.Username = "Thanishrishi";
       thanish.Email = "Thanishrishi43@gmail.com";
       thanish.Password = "Thanish824";
       await thanish.save();
   }catch(error){
    res.json("error");
   }
})
app.post('/data',async(req,res)=>{
    
   console.log(req.body)
   res.send("success");
})
app.listen(process.env.PORT || 3000,(req,res)=>{
console.log('success')
})