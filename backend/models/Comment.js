const mongoose = require('mongoose'); // Import the mongoose library

// Define the schema for a comment
const CommentSchema = new mongoose.Schema({
    comment: {
        type: String, 
        required: true, 
    },
    author: {
        type: String, 
        required: true, 
    },
    postId: {
        type: String, 
        required: true, 
    },
    userId: {
        type: String, 
        required: true, 
    }
}, {timestamps: true}); // Automatically add createdAt and updatedAt timestamps

// Export the Comment model based on the CommentSchema
module.exports = mongoose.model("Comment", CommentSchema);
