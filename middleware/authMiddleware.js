const jwt=require("jsonwebtoken");
const User=require("./../model/userModel");
require("dotenv").config();

const isLoggedIn=async (req,res,next)=>{
    const token=req.cookies.jwt;

    if(token)
    {
        try{
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.user=await User.findOne({_id:decoded.userId},"pseudo email _id offers");
        }catch(e){
            
            return next(new Error("Failed authentification, token incorrect"));
        }
        next();
    }
    else
    {
       
       
        return next(new Error("Failed authentification,token not specified"));
    }
};

module.exports=isLoggedIn;