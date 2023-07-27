const  mongoose = require("mongoose")

const itemCategories = mongoose.Schema({
    itemCategory : {
        type : Array,
        required : true,
    }
})

module.exports = mongoose.model("itemCategories",itemCategories);