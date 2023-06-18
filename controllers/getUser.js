const getUser=async (req,res,next)=>{
    res.status(200);
    res.json({pseudo:req.user.pseudo,email:req.user.email});
    
}

module.exports=getUser;