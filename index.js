const express=require("express");
const cors=require("cors");
const cookieParser=require("cookie-parser");
require("dotenv").config();

const errorHandler=require("./middleware/errorHandler");
const connect=require("./model/connect");
const routes=require("./routes/routes");
const authRoutes=require("./routes/authRoutes");


const app=express();
connect();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static("build"));

app.use(authRoutes);
app.use(routes);

app.use(errorHandler);

app.all("*",(req,res)=>{
    
    res.status(400).send("Not found");
});

app.listen(process.env.PORT,()=>{console.log("server start")});
