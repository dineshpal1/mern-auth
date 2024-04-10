import express from "express"
import  mongoose  from "mongoose"
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'

dotenv.config()
mongoose.connect(process.env.MONGO)
        .then(()=>{
            console.log("Connected to Mongodb")
        })
        .catch((error)=>{
            console.log(error)
        })
const app=express()

app.listen(3000,()=>{
    console.log("server is litening on port 3000")
})
// app.get('/',(req,res)=>{
//     res.json({
//         message:"Api is working"
//     })
// })

app.use('/api/user', userRoutes);