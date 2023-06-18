
const bcrypt=require("bcryptjs");
const User=require("./../model/userModel");

const register= async (req,res,next)=>{

    const {pseudo,email,password}=req.body;
    let user;
    let newUser;
    let hashPassword;

    if(pseudo && email && password){
        
        user=await User.findOne({email:email});
        
        if(!user){
            

            try{

                const salt=await bcrypt.genSalt(10);
                hashPassword=await bcrypt.hash(password,salt);

            }catch(e){
                return next(new Error("password hash failed"+e.message,400));
            }

            newUser=new User();
            newUser.email=email;
            newUser.pseudo=pseudo;
            newUser.password=hashPassword;

            try{

                let savedUser=await newUser.save();
                res.status(200);
                res.send("success");

            }catch(e){
                return next(new Error("Error while saving user"+e.message,400));
            }
            
        }
        else
        {
            return next(new Error("Already an user using that mail address",400))
        }
    }
    else{
       
        return next(new Error(" field missing,  try again",400));
    }
};

module.exports=register;