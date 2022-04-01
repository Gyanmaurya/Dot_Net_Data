

 const mongoose=require('mongoose');

 const userSchema= new mongoose.Schema({
     name:{type:String,require:true},
     age:{type:Number,require:true}
 },{
     versionKey:false,
     timestamps:true
 });
 const User=mongoose.model("heroku",userSchema);
 module.exports=User;