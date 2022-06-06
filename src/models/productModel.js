


const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    
   title : {type :String, required:true},
   image :{type :String, required:true},
   category :{type :String, required:true},
   price :{type :Number, required:true},
},
{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("product", productSchema);