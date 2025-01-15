const mongoose=require("mongoose");  
const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    admin:{type:Boolean,required:false, default:false},
},{
    versionKey:false
})
const userModel=mongoose.model("users",userSchema);
module.exports={userModel}