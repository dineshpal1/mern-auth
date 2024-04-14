import express from "express"
import  mongoose  from "mongoose"
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from "cookie-parser"
import path from 'path';

dotenv.config()
mongoose.connect(process.env.MONGO)
        .then(()=>{
            console.log("Connected to Mongodb")
        })
        .catch((error)=>{
            console.log(error)
        })
const app=express()
app.use(express.json())
app.use(cookieParser())
app.listen(3000,()=>{
    console.log("server is litening on port 3000")
})
// app.get('/',(req,res)=>{
//     res.json({
//         message:"Api is working"
//     })
// })
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500
    const message=err.message ||'Internal server error'
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
})