const bodyparser = require('body-parser')
var cors = require('cors')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const registeredUsers = require('./models/registeredUsers');
const authRoute = require('./routes/authRoute');
const SendDetials = require('./routes/SendDetials');
const transfer = require('./routes/transfer')
const addDatabase = require('./routes/addDatabase');
const sendData = require('./routes/sendData')
const paymentGateway = require('./routes/paymentGateway');
const addCategory = require('./routes/addCategory');
const addItem = require('./routes/addItem');
require('dotenv').config()
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI,(error)=>{
    if(error) console.log(error);
    else console.log("Database Connected");
})
app.use(cors({
    origin : "*",
}))
app.use(express.json());
app.use(addItem);
app.use(express.urlencoded({ extended: false }))
app.use(authRoute);
app.use(SendDetials);
app.use(transfer);
app.use(addDatabase);
app.use(sendData);
app.use(paymentGateway);
app.use(addCategory);
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