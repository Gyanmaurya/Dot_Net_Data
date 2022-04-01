

 const mongoose=require('mongoose');

 const connectdb=()=>{
 
     return mongoose.connect("mongodb+srv://gyan:gyan@cluster0.nm8vq.mongodb.net/myFirstDatabase");
    
 }
 module.exports=connectdb;