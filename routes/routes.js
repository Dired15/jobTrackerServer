const express=require("express");
const route=express.Router();

const addOffer=require("./../controllers/addOffer");
const editOffer=require("./../controllers/editOffer");
const logout=require("./../controllers/logout");
const deleteOffer=require("./../controllers/deleteOffer");

const getUser=require("./../controllers/getUser");
const {getOffersList,getOffer}=require("./../controllers/getOffers");
const isLoggedIn=require("./../middleware/authMiddleware");

route.get("/",(req,res)=>{

    res.send("home");
});

route.use(isLoggedIn);
route.post("/logout",logout);
route.get("/app",getUser);
route.get("/app/offers",getOffersList);

route.get("/app/offers/:id",getOffer);

route.post("/app/offers/:id/edit",editOffer);
route.post("/app/offers/:id/delete",deleteOffer);
route.post("/app/offers/add",addOffer);


module.exports=route;