const mongoose = require('mongoose');

const itemschema = mongoose.Schema(
    {

        // name: {
        //     type : String,
        //     required : true,
        // },
        // rating: {
        //     type : Number,
        //     required : true,
        // },
        items : {
            type : Array,
            required : true,
        },
        // priceRating: {
        //     type : String,
        //     required : true,

        // },
        // photo: {
        //     type : String,
        //     required : true,

        // },
        // price: {
        //     type : Number,
        //     required : true,
        // },
    }
)

module.exports = mongoose.model("Itemdata",itemschema);