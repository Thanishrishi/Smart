const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
require('dotenv').config();

const itemData = require('../models/itemData')

router.post('/admin/additem',(req,res)=>{
    const newId = req.body.newId;
    const itemName = req.body.itemName;
    const quantity  = req.body.quantity;
    const categoryId = req.body.categoryId;
    const itemPrice = req.body.itemPrice;
    const newItem = {
                id : newId,
                name: itemName,
                quantity : quantity,
                rating: 4.8,
                categories: [categoryId],
                priceRating: "affordable",
                photo: 42,
                price: itemPrice,
    }
    itemData.updateOne({},{ $push : {items : newItem}}).then(function(){
        res.send("items appended successfully!")
    }).catch(function(err){
        console.log(err);
        res.send("item append failed");
    })
    
 })

module.exports = router;