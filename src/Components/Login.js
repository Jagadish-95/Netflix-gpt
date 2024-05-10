import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
const [isSignIn, setIsSignin] = useState(true)

  const toggleSignInForm = () => {
    setIsSignin(!isSignIn)
  }

  return (
    <div>
     <Header/>
     <div className='absolute'>
     <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
     alt='logo' />
     </div>
     <form className=' w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg opacity-80'>
      <h1 className='font-bold text-3xl py-4'>
        {isSignIn ? "Sign In" : "Sign Up"}</h1>
      {!isSignIn  && (<input type='text'
       placeholder='Full Name' 
       className='p-4 my-4 w-full bg-gray-800' />)}
      <input type='text'
       placeholder='Email Address' 
       className='p-4 my-4 w-full bg-gray-800' />
      <input type='password' 
      placeholder='Password' 
      className='p-4 my-4 w-full bg-gray-800'/>
     
      <button className='my-6 p-4 bg-red-700 w-full rounded-lg'>
        {isSignIn ? "Sign In" : "Sign Up"}</button>
      <p className=' py-4 cursor-pointer' onClick={toggleSignInForm}>
        {!isSignIn ? "New to Netflix? Sign Up Now" : "Already Registered. Sign In Now"}</p>
     </form>
    </div>
  )
}

export default Login
