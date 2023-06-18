const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
require("dotenv").config();

const User=require("./../model/userModel");
const nodemon = require("nodemon");

const login=async (req,res,next)=>{
    const {pseudo,email,password}=req.body;
    let user,match,token;

   if(email && password)
   {

        user=await User.findOne({email:email});
        
        if(user){

            try{
                match=await bcrypt.compare(password,user.password);

            }catch(e){
                
                return next(new Error("Error while comparing password",500));
            }

            if(match){
                token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'30d'});
                res.cookie("jwt",token,{httpOnly:true,maxAge:30*24*60*60*1000,sameSite:"none",secure:true});
                res.status(200);
                res.json({pseudo:user.pseudo,email:user.email});

            }
            else
            {
                return next(new Error("The password is wrong",400));
            }
        }
        else
        {
            return next(new Error("No address mail corresponding",400));
        }
        
   }
   else
   {
        return next(new Error("field missing",400));
   }
};

module.exports=login;