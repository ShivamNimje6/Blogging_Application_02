const mongoose=require('mongoose')// Import the mongoose library

// Define the schema for a user
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    }
},{timestamps:true})

// Export the User model based on the UserSchema
module.exports=mongoose.model("User",UserSchema)