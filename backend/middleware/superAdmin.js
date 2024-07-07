//super admin have access of whole website like to get users etc. 
const superAdmin = async(req,res,next)=>{
    if(req.user && req.user.role == "superAdmin"){
       return next()
    }

    res.status(403).json({
        message:"Not authorized as an superAdmin"
    })
}

module.exports = superAdmin