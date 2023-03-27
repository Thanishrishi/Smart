const express = require('express')
const mongoose  = require('mongoose');
const router = express.Router();
require('dotenv').config();

const itemData = require('../models/itemData');

router.get("/adddata",(req,res)=>{
    itemData.insertMany({
        
        items : [
            {
        
                id : 1,
                name: "Chicken Fried Rice",
                rating: 4.8,
                categories: [8],
                priceRating: "affordable",
                photo: 42,
                price: 60,
            },
            {
                id : 2,
                
                
                name: "Cone",
                rating: 4.8,
                categories: [3],
                priceRating: "affordable",
                photo: 49,
                price: 20,
            },
            {
                id : 3,
                
                
                name: "Chicken Nuggets",
                rating: 4.8,
                categories: [5],
                priceRating: "affordable",
                photo: 43,
                price: 45,
            },
            {
                id : 4,
                
                
                name: "French Fries",
                rating: 4.8,
                categories: [5],
                priceRating: "affordable",
                photo: 47,
                price: 30,
            },
            {
                id : 5,
                
                
                name: "Cup ice",
                rating: 4.8,
                categories: [3],
                priceRating: "affordable",
                photo: 45,
                price: 10,
            },
            {
                id : 6,
                
                
                name: "Fresh Juice",
                rating: 4.8,
                categories: [4],
                priceRating: "affordable",
                photo: 48,
                price: 30,
            },
            {
                id : 7,
                
                
                name: "Egg puff",
                rating: 4.8,
                categories: [2],
                priceRating: "affordable",
                photo: 46,
                price: 18,
            },
            {
                id : 8,
                
                
                name: "Chicken puff",
                rating: 4.8,
                categories: [2],
                priceRating: "affordable",
                photo: 44,
                price: 22,
            },
            {
                id : 9,
                
                
                name: "Soda",
                rating: 4.8,
                categories: [4],
                priceRating: "affordable",
                photo: 55,
                price: 12,
            },
            {
                id : 10,
                
                
                name: "Veg puff",
                rating: 4.8,
                categories: [2],
                priceRating: "affordable",
                photo: 53,
                price: 15,
            },
            
            {
                id : 11,
              
                
                
                name: "Parotta",
                rating: 4.8,
                categories: [7],
                priceRating: "affordable",
                photo: 51,
                price: 15,
            },
            {
                
                id:12,
                name: "Mushroom Masala",
                rating: 4.8,
                categories: [6],
                priceRating: "affordable",
                photo: 54,
                price: 20,
            },
            {
                
                id:13,
                name: "Meals",
                rating: 4.8,
                categories: [8],
                priceRating: "affordable",
                photo: 50,
                price: 60,
            },
        ]
    }

   

    ).then(function(){
        res.json("Inserted");
    }).catch(function(error){
        console.log(error)
    })
})

module.exports = router;