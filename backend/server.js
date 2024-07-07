const express = require("express")
const server = express()
require("dotenv").config()
const dbConnect = require("./config/db")
const morgan = require("morgan")
const cors = require('cors')

server.use(cors())
server.use(express.json())

dbConnect();
server.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

server.use("/api",require("./routes/userRoutes"))




server.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).json({
        error : err.message || "Internal Server Error"
    })
})

server.listen(process.env.PORT,()=>{
    console.log(`Server is running on the port : ${process.env.PORT}`)
})