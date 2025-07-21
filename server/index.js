import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectDB from "./config/db.js"
import authRoutes from "./routes/user.route.js"

dotenv.config()

const app= express()
const port = process.env.PORT || 5000

//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser());

//routes
app.use("/api/auth",authRoutes)

app.listen(port,(req,res)=>{
    connectDB()
    console.log(`server runs at http://localhost:${port}`)
})