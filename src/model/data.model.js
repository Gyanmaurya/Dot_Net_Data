

 const mongoose=require('mongoose');

 const dataSchema= new mongoose.Schema({
     name:{type:String,require:true},
     about:{type:String,require:true},
     price:{type:Number , require:true},
     crossprice:{type:Number , require:true},
     discount:{type:String ,require:true },
     approx:{type:String ,require:true },
     color:{type:String ,require:true },
     detail:{type:String ,require:true },
     image:{type:Array ,require:true },
     catagory:{type:String,require:true}

 },{
     versionKey:false,
     timestamps:true
 });
 const Data=mongoose.model("mens",dataSchema);
 module.exports=Data;