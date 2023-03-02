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
                photo: "images.chickenrice",
                price: 60,
            },
            {
                id : 2,
                
                
                name: "Cone",
                rating: 4.8,
                categories: [3],
                priceRating: "affordable",
                photo: "images.coneicecream",
                price: 20,
            },
            {
                id : 3,
                
                
                name: "Chicken Nuggets",
                rating: 4.8,
                categories: [5],
                priceRating: "affordable",
                photo: "images.chickennuggets",
                price: 45,
            },
            {
                id : 4,
                
                
                name: "French Fries",
                rating: 4.8,
                categories: [5],
                priceRating: "affordable",
                photo: "images.frenchfries",
                price: 30,
            },
            {
                id : 5,
                
                
                name: "Cup ice",
                rating: 4.8,
                categories: [3],
                priceRating: "affordable",
                photo: "images.cupice",
                price: 10,
            },
            {
                id : 6,
                
                
                name: "Fresh Juice",
                rating: 4.8,
                categories: [4],
                priceRating: "affordable",
                photo: "images.frenchfries",
                price: 30,
            },
            {
                id : 7,
                
                
                name: "Egg puff",
                rating: 4.8,
                categories: [2],
                priceRating: "affordable",
                photo: "images.eggpuff",
                price: 18,
            },
            {
                id : 8,
                
                
                name: "Chicken puff",
                rating: 4.8,
                categories: [2],
                priceRating: "affordable",
                photo: "images.chickenpuffs",
                price: 22,
            },
            {
                id : 9,
                
                
                name: "Soda",
                rating: 4.8,
                categories: [4],
                priceRating: "affordable",
                photo: "images.soda",
                price: 12,
            },
            {
                id : 10,
                
                
                name: "Veg puff",
                rating: 4.8,
                categories: [2],
                priceRating: "affordable",
                photo: "images.vegpuffs",
                price: 15,
            },
            
            {
                id : 11,
              
                
                
                name: "Parotta",
                rating: 4.8,
                categories: [7],
                priceRating: "affordable",
                photo: "images.parotta",
                price: 15,
            },
            {
                
                id:12,
                name: "Mushroom Masala",
                rating: 4.8,
                categories: [6],
                priceRating: "affordable",
                photo: "images.mushroommasala",
                price: 20,
            },
            {
                
                id:13,
                name: "Meals",
                rating: 4.8,
                categories: [8],
                priceRating: "affordable",
                photo: "images.meals",
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