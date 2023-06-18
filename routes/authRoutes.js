const express=require("express");
const login=require("./../controllers/login");
const register=require("./../controllers/register");


const route=express.Router();

route.post("/login",login);

route.post("/register",register);




module.exports=route;