

const mongoose=require('mongoose');

const connectdb=()=>{

    return mongoose.connect('mongodb+srv://NayanIngale:nayan123@cluster0.yyh15.mongodb.net/courseraData');
    //mongodb+srv://Gyan123:Gyan123@cluster0.owvti.mongodb.net/courseraData?retryWrites=true&w=majority
    //mongodb://127.0.0.1:27017/courseraData
}
module.exports=connectdb;