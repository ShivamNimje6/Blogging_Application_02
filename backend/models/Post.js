const mongoose=require('mongoose')// Import the mongoose library

// Define the schema for a post
const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
        unique:true
    },
    photo:{
        type:String,
        required:false,
        
    },
    username:{
        type:String,
        required:true,  
    },
    userId:{
        type:String,
        required:true,  
    },
    categories:{
        type:Array,
        
    },
},{timestamps:true})// Automatically add createdAt and updatedAt timestamps

// Export the Post model based on the PostSchema
module.exports=mongoose.model("Post",PostSchema)