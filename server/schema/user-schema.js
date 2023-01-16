import mongoose from "mongoose";
import autoincrement from 'mongoose-auto-increment'

 const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    }
})
autoincrement.initialize(mongoose.connection);
userSchema.plugin(autoincrement.plugin,'user')
const user=mongoose.model('user',userSchema);
export default user;