const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")
const protect = require("../middleware/protect")
const superAdmin = require("../middleware/superAdmin")


router.post("/signup",userController.signup)
router.post("/login",userController.login)
router.get("/allusers",protect, superAdmin, userController.getUsers)



module.exports = router