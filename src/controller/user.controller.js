
  const express=require('express');
const User = require('../model/user.model');
  const router=express.Router();

  router.post('',async(req,res)=>{
      try {
          const user=await User.create(req.body);
          return res.status(200).send({user:user});
      } catch (error) {
          console.log(error);

            return res.status(400).send({message:error.message});
      }
  })
  router.get('',async(req,res)=>{
      try {
          const user=await User.find({}).lean().exec();
          return res.status(200).send({user:user});
      } catch (error) {
          console.log(error);

            return res.status(400).send({message:error.message});
      }
  })



  module.exports=router;
  