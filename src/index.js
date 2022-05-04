 const express=require('express');
 const app=express();
 const dotenv = require('dotenv')
 require('dotenv').config()

 const connectdb=require('./config/db')
 app.use(express.json());
const cors=require('cors');
app.use(cors())
 const dataController=require("./controller/data.controller");
 app.use("/data",dataController);
 
//  app.get("/gyan",async(req,res)=>{
//      try {
//         return res.status(200).send('Now Data imported in heroku ');
//      } catch (error) {

//         console.log(error);
        

//         return res.status(400).send({message:error.message});
//      }
//  })



 module.exports=app;


 app.listen(5000,async()=>{
     try {
         await connectdb();
         console.log('Server Connected Succes')
     } catch (error) {
         console.log(error)
     }

 })