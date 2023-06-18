const mongoose=require("mongoose");
const User=require("./../model/userModel");
const Offer=require("./../model/offerModel");

const getOffersList=async (req,res,next)=>{
    try
    {
        
        const user=await User.findOne({_id:req.user._id}).populate("offers","title createdAt answer company _id");
        const offersList=user.offers.map((element)=>{
            element.answer=(element.answer=="Not specified"||element.answer=="")?false:true;
            return element;
        });
        res.status(200);
        res.json(offersList);
    }catch(e){
        return next(new Error("Error while getting the list of offers"+e.message,400));
    }
};

const getOffer=async (req,res,next)=>{
    
    try
    {
        
        const offer=await Offer.findOne({_id:req.params.id});
        res.status(200);
        res.json(offer);
    }catch(e){
        
        return next(new Error("Error while getting the offer information"+e.message,400));
    }
};

module.exports={getOffersList,getOffer};