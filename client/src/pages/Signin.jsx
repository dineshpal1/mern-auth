import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {signInstart,signInSuccess,signInFailure} from '../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import OAuth from "../components/OAuth"
function Signin() {
    const [formData, setFormData] = useState({});
    // const [error, setError] = useState(false)
    // const [loading, setLoading] = useState(false)
    const { loading, error } = useSelector((state) => state.user);
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    // console.log(formData)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            dispatch(signInstart())
            // setLoading(true)
            // setError(false)
            const res=await fetch('/api/auth/signin',{
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            })
            const data=await res.json()
            // console.log(data)
          
            // setLoading(false)
            if(data.success===false){
                // setError(true)
                dispatch(signInFailure(data))
                return
            }
            dispatch(signInSuccess(data))
            navigate('/')
        } catch (error) {
            // setLoading(false)
            // setError(true)
            dispatch(signInFailure(error))
        }
        
 
    }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
     
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <button disabled={loading} className="bg-slate-700 text-white
         p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
           {loading ? 'Loading...':'Sign In'}
            </button>
            <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to="/sign-up">
        <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error && "Something went wrong!"}</p>
    </div>
  );
}

export default Signin
