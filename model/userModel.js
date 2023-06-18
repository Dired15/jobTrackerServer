
const mongoose=require("mongoose");
const Offer=require("./offerModel");

const userSchema=new mongoose.Schema({
    pseudo:String,
    email:String,
    password:String,
    offers:[{type: mongoose.Schema.Types.ObjectId, ref: 'Offer'}],
});

const User=mongoose.model("User",userSchema);

module.exports=User;