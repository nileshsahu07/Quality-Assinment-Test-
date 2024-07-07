// token varify ki file
const jwt = require("jsonwebtoken")
const User = require("../model/user")

const protect = async (req,res,next)=>{

    const authHeader = req.headers.authorization
    
    if(authHeader && authHeader.startsWith('Bearer')){
        
    const token = authHeader.split(' ')[1]

    //TODO - We have to varify the token from the frontend
    const decoded = jwt.verify(token, 'this-is-my-secret')

    const {id ,role} = decoded

    const user = await User.findById(id)

    if(!user){
        return res.status(400).json({message:"user not found"})
    }

    req.user = user
    next()
    

    }else{
       const error = new Error('Token is Not available')
       error.statusCode = 403
       throw error
    }
}       

module.exports = protect