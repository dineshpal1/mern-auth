import React from 'react'
import {useSelector} from "react-redux"
function Profile() {
  const {currentUser}=useSelector((state)=>state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
     <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
     <form className='flex flex-col gap-4'>
      <img src={currentUser.profilePicture} alt="profile"
      className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2'/>

      <input type="text" placeholder='Username' id="username"
      className='bg-slate-100 rounded-lg p-3' defaultValue={currentUser.username}/>

       <input type="email" placeholder='email' id="email"
      className='bg-slate-100 rounded-lg p-3' defaultValue={currentUser.email}/>

       <input type="password" placeholder='password' id="password"
      className='bg-slate-100 rounded-lg p-3'/>
      <button className='bg-slate-700 text-white rounded-lg 
      p-3 uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
     </form>
     <div className='flex mt-5 justify-between'>
      <span className='text-red-700 cursor-pointer'>
        Delete Account
        </span>
        <span className='text-red-700 cursor-pointer'>
        Sign out
        </span>
     </div>
    </div>
  )
}

export default Profile
