
const mongoose=require("mongoose");
require("dotenv").config();

const connect=async ()=>{
    try
    {
        await mongoose.connect(process.env.MONGODB_URL);
    }
    catch(e){console.log("error while connection",e.message)}

};

module.exports=connect;