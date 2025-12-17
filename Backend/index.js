import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import { connectDB } from "./databaseConnection/db.js"

 const app = express()
  app.use(cors())
  app.use(express.json())
 
 dotenv.config()
 const PORT = process.env.PORT || 5000

 app.use("/book", bookRoute)
  app.use("/user", userRoute)
 

 app.listen(PORT, ()=>{
    console.log(`Your Server is running on port ${PORT}`)
    connectDB()
 })