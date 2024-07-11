const jwt=require('jsonwebtoken')// Import the jsonwebtoken library

const verifyToken=(req,res,next)=>{
    const token=req.cookies.token // Retrieve the token from the request cookies
    // console.log(token)
    if(!token){
        return res.status(401).json("You are not authenticated!")
    }
    jwt.verify(token,process.env.SECRET,async (err,data)=>{
        if(err){
            return res.status(403).json("Token is not valid!")
        }
        
        // Attach the user ID from the token to the request object
        req.userId=data._id
       
        // console.log("passed")
        
        next()
    })
}

module.exports=verifyToken// Export the verifyToken middleware function