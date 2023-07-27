const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
require("dotenv").config();
const itemData = require('../models/itemData');
const itemCategories = require('../models/itemCategory');
router.post('/getitems',(req,res)=>{
    itemData.findOne({})
    .then((saveddata)=>{
        if(saveddata){
            res.send(saveddata.items);
        }
        res.send("fail");
    })
})
router.post('/fetch/itemcategories',(req,res)=>{
    itemCategories.findOne({})
    .then((saveddata)=>{
        if(saveddata){
            res.send(saveddata);
        }
        res.send("fail");
    })
})

module.exports = router;