 import mongoose from "mongoose";

 const connection=async(username,password)=>
 {
    const URL=`mongodb+srv://${username}:${password}@cluster0.pq65k.mongodb.net/crud?retryWrites=true&w=majority`;
    try
    {
     await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
     console.log("database connected");
    }
    catch(error)
    {
     console.log("error in mongodb coonection",error)
    }
 }
 export default connection;