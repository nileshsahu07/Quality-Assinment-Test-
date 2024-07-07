const mongoose = require("mongoose")
require("dotenv").config()

const colors = require("colors")

const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(colors.green('connection is successfull').underline)
    }catch(error){
        console.log(colors.red(error))
    }
}

module.exports = dbConnect