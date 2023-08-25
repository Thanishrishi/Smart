const express = require('express')
const mongoose  = require('mongoose');
const router = express.Router();
require('dotenv').config();

const itemData = require('../models/itemData');
const adminUsers = require('../models/adminUsers')
const itemCategories = require('../models/itemCategory');
router.get("/adddata",(req,res)=>{
    itemData.insertMany({
        
        items : [
            {
        
                id : 1,
                name: "Chicken Fried Rice",
                quantity : 58,
                rating: 4.8,
                categories: [8],
                priceRating: "affordable",
                photo: 42,
                price: 60,
            },
            {
                id : 2,
                
                
                name: "Cone",
                quantity : 58,
                rating: 4.8,
                categories: [3],
                priceRating: "affordable",
                photo: 49,
                price: 20,
            },
            {
                id : 3,
                
                
                name: "Chicken Nuggets",
                quantity : 58,
                rating: 4.8,
                categories: [5],
                priceRating: "affordable",
                photo: 43,
                price: 45,
            },
            {
                id : 4,
                
                
                name: "French Fries",
                quantity : 58,
                rating: 4.8,
                categories: [5],
                priceRating: "affordable",
                photo: 47,
                price: 30,
            },
            {
                id : 5,
                
                
                name: "Cup ice",
                quantity : 58,
                rating: 4.8,
                categories: [3],
                priceRating: "affordable",
                photo: 45,
                price: 10,
            },
            {
                id : 6,
                
                
                name: "Fresh Juice",
                quantity : 58,
                rating: 4.8,
                categories: [4],
                priceRating: "affordable",
                photo: 48,
                price: 30,
            },
            {
                id : 7,
                
                
                name: "Egg puff",
                quantity : 58,
                rating: 4.8,
                categories: [2],
                priceRating: "affordable",
                photo: 46,
                price: 18,
            },
            {
                id : 8,
                
                
                name: "Chicken puff",
                quantity : 58,
                rating: 4.8,
                categories: [2],
                priceRating: "affordable",
                photo: 44,
                price: 22,
            },
            {
                id : 9,
                
                
                name: "Soda",
                quantity : 58,
                rating: 4.8,
                categories: [4],
                priceRating: "affordable",
                photo: 55,
                price: 12,
            },
            {
                id : 10,
                
                
                name: "Veg puff",
                quantity : 58,
                rating: 4.8,
                categories: [2],
                priceRating: "affordable",
                photo: 53,
                price: 15,
            },
            
            {
                id : 11,
              
                
                
                name: "Parotta",
                quantity : 58,
                rating: 4.8,
                categories: [7],
                priceRating: "affordable",
                photo: 51,
                price: 15,
            },
            {
                
                id:12,
                name: "Mushroom Masala",
                quantity : 58,
                rating: 4.8,
                categories: [6],
                priceRating: "affordable",
                photo: 54,
                price: 20,
            },
            {
                
                id:13,
                name: "Meals",
                quantity : 58,
                rating: 4.8,
                categories: [8],
                priceRating: "affordable",
                photo: 50,
                price: 60,
            },
            {
               
                id:14,
                name: "Mushroom Puffs",
                quantity : 58,
                rating: 4.8,
                categories: [2],
                priceRating: "affordable",
                photo: 56,
                price: 20,
            },
            {
               
                id:15,
                name: "Sweet Parotta",
                quantity : 58,
                rating: 4.8,
                categories: [2],
                priceRating: "affordable",
                photo: 57,
                price: 15,
            },
            {
               
                id:16,
                name: "Sweet Bun",
                quantity : 58,
                rating: 4.8,
                categories: [2],
                priceRating: "affordable",
                photo: 58,
                price: 15,
            },
            {
               
                id:17,
                name: "Coconut Bun",
                quantity : 58,
                rating: 4.8,
                categories: [2],
                priceRating: "affordable",
                photo: 59,
                price: 15,
            },
            {
               
                id:18,
                name: "Kothu Parotta",
                quantity : 58,
                rating: 4.8,
                categories: [7],
                priceRating: "affordable",
                photo: 60,
                price: 50,
            },
            {
               
                id:19,
                name: "Chicken Noodles",
                quantity : 58,
                rating: 4.8,
                categories: [8],
                priceRating: "affordable",
                photo: 61,
                price: 60,
            },
            {
               
                id:20,
                name: "Egg Noodles",
                quantity : 58,
                rating: 4.8,
                categories: [8],
                priceRating: "affordable",
                photo: 62,
                price: 50,
            },
            {
               
                id:20,
                name: "Veg Noodles",
                quantity : 58,
                rating: 4.8,
                categories: [8],
                priceRating: "affordable",
                photo: 63,
                price: 50,
            },
            {
               
                id:21,
                name: "Egg Fried Rice",
                quantity : 58,
                rating: 4.8,
                categories: [8],
                priceRating: "affordable",
                photo: 64,
                price: 50,
            },
            {
               
                id:22,
                name: "Veg Fried Rice",
                quantity : 58,
                rating: 4.8,
                categories: [8],
                priceRating: "affordable",
                photo: 65,
                price: 50,
            },
            {
               
                id:23,
                name: "Chicken Briyani",
                quantity : 58,
                rating: 4.8,
                categories: [8],
                priceRating: "affordable",
                photo: 66,
                price: 90,
            },
          
            {
               
                id:24,
                name: "Samosa",
                quantity : 58,
                rating: 4.8,
                categories: [1],
                priceRating: "affordable",
                photo: 67,
                price: 20,
            },
            {
               
                id:25,
                name: "Roast",
                quantity : 58,
                rating: 4.8,
                categories: [7],
                priceRating: "affordable",
                photo: 68,
                price: 50,
            },
            {
               
                id:26,
                name: "Chappathi",
                quantity : 58,
                rating: 4.8,
                categories: [7],
                priceRating: "affordable",
                photo: 69,
                price: 30,
            },
            {
               
                id:27,
                name: "Panipuri",
                quantity : 58,
                rating: 4.8,
                categories: [1],
                priceRating: "affordable",
                photo: 70,
                price: 25,
            },
         
            {
               
                id:28,
                name: "Bhelpuri",
                quantity : 58,
                rating: 4.8,
                categories: [1],
                priceRating: "affordable",
                photo: 71,
                price: 25,
            },



        ]
    }



   

    ).then(function(){
        res.json("Inserted");
    }).catch(function(error){
        console.log(error)
    })
})
const admins = 
    {
        Username : "Thanishrishi",
        Password : "Thanish824",
        Role : "Superadmin",
    }

router.get('/add/userAdmins',(req,res)=>{
    adminUsers.insertMany(
        [{Username : "Varuns",Password:"SmartVarun",Role : "SuperAdmin",}]
    ).then(function(){
        res.json("Inserted");
    }).catch(function(err){
        console.log(err);
    })
})

router.get('/add/itemcategories',(req,res)=>{
    itemCategories.insertMany({
        itemCategory : [
          
                {
                    id: 1,
                    name: "SNACKS",
                    icon: 30,
                },
                {
                    id: 2,
                    name: "BAKES",
                    icon: 29,
                },
                {
                    id: 3,
                    name: "SCOOPS",
                    icon: 32,
                },
                {
                    id: 4,
                    name: "BEAVERAGES",
                    icon: 5,
        
                },
                {
                    id: 5,
                    name: "FASTFOOD",
                    icon: 31,
                },
                {
                    id: 6,
                    name: "STARTERS",
                    icon: 28,
                },
                {
                    id: 7,
                    name: "TIFFIN",
                    icon: 26,
                },
                {
                    id: 8,
                    name: "RICE",
                    icon: 19,
                },
                {
                    id: 9,
                    name: "S-MART",
                    icon: 27,
                },
               
        
            
        ]
    }).then(function(){
        console.log("InsertedCategoryData");
    }).catch(function(err){
        console.log(err);
    })
})

module.exports = router;