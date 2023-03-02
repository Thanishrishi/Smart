const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Username : {
        type: String,
        required : true,
        unique : true
    },
    Email : {
        type: String,
        required : true,
        unique : true
    },
    Password : {
        type: String,
        required : true
    },
    Wallet : {
        type:Number,
        required : true
    },
    Cartamount :{
        type:Number,
        required : true
    },
   
})

module.exports = mongoose.model('User',userSchema);