
const logout=(req,res)=>{
    res.cookie("jwt",'',{httpOnly:true,expires:new Date(0)});
    res.status(200).send("success");
};

module.exports=logout;