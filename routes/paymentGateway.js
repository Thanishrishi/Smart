<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const registeredUsers = require('../models/registeredUsers');
require('dotenv').config();


router.post('/paymentgateway',(req,res)=>{

    res.send(req.body);
})

=======
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const registeredUsers = require('../models/registeredUsers');
require('dotenv').config();


router.post('/paymentgateway',(req,res)=>{

    res.send(req.body);
})

>>>>>>> 5f806983651c972443a0229d7ec30326501e19ba
module.exports = router;