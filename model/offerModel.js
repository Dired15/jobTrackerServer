const mongoose=require("mongoose");

const offerSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    salary:{
        type:String,
        default:"Not specified",
    },
    answer:{
        type:String,
        default:"Not specified",
    },
    requirement:{
        type:String,
        default:"Not specified",
    },
    description:{
        type:String,
        default:"Not specified",
    },
},{timestamps:true});

 const Offer=mongoose.model("Offer",offerSchema);

module.exports=Offer;