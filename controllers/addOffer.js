const Offer=require("./../model/offerModel");
const User=require("./../model/userModel");

const addOffer=async (req,res,next)=>{
    const {title,company,salary,answer,requirement,description}=req.body;
    let offer,user;

    if(req.user)
    {
        
         
        try{
            const newOffer=new Offer({
                        title,
                        company,
                        salary,
                        answer,
                        requirement,
                        description
                    });

            offer=await newOffer.save();
            user=await User.findOne({_id:req.user._id});
            user.offers=[...user.offers,offer._id];
            await user.save();

            res.status(200);
            res.json(offer);
            
        }catch(e){
            console.log(e.message);
            return next(new Error("Error while saving the offer"+e.message,400));
        }

        
    }
    else{
        return next(new Error("not authentified",400));
    }

};

module.exports=addOffer