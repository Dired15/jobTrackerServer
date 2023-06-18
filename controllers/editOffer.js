const User=require("./../model/userModel");
const Offer=require("./../model/offerModel");

const editOffer=async (req,res,next)=>{
    const {title,company,description,requirement,answer}=req.body;
    try{
        const offer=await Offer.findOne({_id:req.params.id});

        offer.title=(title!=undefined)?title:offer.title;
        offer.company=(company!=undefined)?company:offer.company;
        offer.description=(description!=undefined)?description:offer.description;
        offer.requirement=(requirement!=undefined)?requirement:offer.requirement;
        offer.answer=(answer!=undefined)?answer:offer.answer;

        const updatedOffer=await offer.save();
        
        res.status(200);
        res.json(updatedOffer);
        
    }catch(e){
        return next(new Error("Error whil editing offer"+e.message,400));
    }
};

module.exports=editOffer;