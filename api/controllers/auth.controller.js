import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken';

export const signup=async(req,res,next)=>{
    // console.log(req.body)
    const {username,email,password}=req.body
    const hashedPassword=bcryptjs.hashSync(password,10)
    const newUser= new User({username,email,password:hashedPassword})
    try {
        await newUser.save()
        res.status(201).json({message:'user created successfully'})
    } catch (error) {
        // res.status(500).json({message:error.message}) 
        next(error)
    }
  }

  export const signin=async(req,res,next)=>{
    const {email,password}=req.body
    try {
       const validUser=await User.findOne({email})
        if(!validUser)
        return next(errorHandlerHandler(404,"User not found"))
        const validPassword=bcryptjs.compareSync(password,validUser.password)
        if(!validPassword) return next(errorHandlerHandler(401,"Wrong credentials"))
        const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET)
        const {password:hashedPassword,...rest}=validUser._doc
        const expirayDate=new Date(Date.now()+3600000) //1 hr
        res
        .cookie("access_token", token,{httpOnly:true,expires:expirayDate})
        .status(200)
        .json(rest)
    } catch (error) {
        next(error)
    }

  }