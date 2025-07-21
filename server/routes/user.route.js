import express from "express"
import {protectRoute} from "../middleware/protectRoute.js"
import {SignUp,Login,Logout,getMe} from "../controllers/userController.js"

const router = express.Router()

router.get("/me", protectRoute, getMe);
router.post("/signup",SignUp)
router.post("/login",Login)
router.post("/logout",Logout)




export default router