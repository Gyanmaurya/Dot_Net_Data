

 const express=require('express');
const User = require('../model/user.model');
 const router=express.Router();

 router.get("",async(req,res,next)=>{

  
     try {
         const username=req.query.name;
         const user=await User.find({name:{$regex:username,$options: 'si' }});
        //  { <field>: { $regex: /pattern/, $options: '<options>' } }
       return  res.status(200).send({user:user})

     } catch (error) {
         console.log(error)
         return res.status(401).send({message:error.message});
     }
 });
 router.post("",async(req,res)=>{
     try {
        //  const username=req.query.name;
         const user=await User.create(req.body)
         return  res.status(200).send({user:user})

     } catch (error) {
        console.log(error)
        return res.status(401).send({message:error.message})
        
     }
 })

 module.exports=router;