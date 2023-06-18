const Offer=require("./../model/offerModel");

const deleteOffer= async (req,res,next)=>{
    
    try
    {
        console.log("delete controllers");
        const deleteCount=await Offer.deleteOne({_id:req.params.id});
        res.status(200).send("success");
    }catch(e){
        next(new Error("Delete operation failed "+e.message))
    }
}

module.exports=deleteOffer;