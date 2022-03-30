

   const connectdb=require('./config/db');
   const app=require("./index");
        app.listen(6000,async()=>{
        await connectdb();
        console.log("listening port 6000")
      });