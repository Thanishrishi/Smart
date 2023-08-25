const express = require('express');
const mongoose  = require('mongoose');
const router = express.Router();
require('dotenv').config();

const itemCategories = require('../models/itemCategory');

router.post('/admin/addcategory',(req,res)=>{
    const categoryName = req.body.categoryName;
    const newId = req.body.newId;

    const newCategory = {
        id : newId,
        name : categoryName,
        icon : 27,
    }
     itemCategories.updateOne( {},{$push : {itemCategory : newCategory} }).then(function(){
        res.send("appended category successfully!!");
     }).catch(function(err){
        console.log(err);
        res.send("appended category failed");
     })
})

module.exports = router