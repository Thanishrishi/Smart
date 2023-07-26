const mongoose = require('mongoose');

const adminUsers = mongoose.Schema({
    Username : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    },
    Role : {
        type : String,
        required : true
    },
})

module.exports = mongoose.model("adminUsers",adminUsers);