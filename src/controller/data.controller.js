
  const express=require('express');
const Data = require('../model/data.model');

  const router=express.Router();

  router.post('/men',async(req,res)=>{
      try {
          const men=await Data.create(req.body);
          return res.status(200).send({mensdata:men});
      } catch (error) {
          console.log(error);

            return res.status(400).send({message:error.message});
      }
  })
  router.post('/women',async(req,res)=>{
      try {
          const women=await Data.create(req.body);
          return res.status(200).send({womensdata:women});
      } catch (error) {
          console.log(error);

            return res.status(400).send({message:error.message});
      }
  })
  router.get('/men',async(req,res)=>{
      try {
          const men=await Data.find({}).lean().exec();
          return res.status(200).send({mensdata:men});
      } catch (error) {
          console.log(error);

            return res.status(400).send({message:error.message});
      }
  })
  router.get('/women',async(req,res)=>{
      try {
          const women=await Data.find({}).lean().exec();
          return res.status(200).send({womensdata:women});
      } catch (error) {
          console.log(error);

            return res.status(400).send({message:error.message});
      }
  })



  module.exports=router;
  