import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValiadate } from '../Utils/Validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,  updateProfile   } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { AVATAR_LOGO, BG_IMAGE } from '../Utils/constants';

const Login = () => {
  const dispatch = useDispatch()
const [isSignIn, setIsSignin] = useState(true);
const [errorMessage, setErrorMessage] = useState(null);
const email = useRef(null)
const password = useRef(null)
const name = useRef(null)

const toggleSignInForm = () => {
  setIsSignin(!isSignIn)
}
 


const handleClick= () => {
 
  const message = checkValiadate(email.current.value, password.current.value )
  setErrorMessage(message);
  

  if(message) return;

  if(!isSignIn) {
    // sign up logic


createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    
    const user = userCredential.user;

updateProfile(user, {
  displayName: name.current.value, photoURL: AVATAR_LOGO
}).then(() => {
  const {uid, email, displayName, photoURL} = auth.currentUser;
  dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));

  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
  setErrorMessage(error)
});
    // console.log(user);
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage )
  });
  }
  else{
    // signin logic
   


signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
  }
  
  }


  return (
    <div>
     <Header/>
     <div className='absolute'>
     <img className=' ' src={BG_IMAGE}
     alt='logo' />
     </div>
     <form onSubmit={(e)=>e.preventDefault()} className='w-full md:w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg opacity-80'>
      
      <h1 className='font-bold text-3xl py-4'>
        {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
      {!isSignIn  && (<input type='text'
      ref={name}
       placeholder='Full Name' 
       className='p-4 my-4 w-full bg-gray-800' />)}
      <input type='text'
      ref={email}
       placeholder='Email Address' 
       className='p-4 my-4 w-full bg-gray-800'
      />
      <input type='password' 
      ref={password}
      placeholder='Password' 
      className='p-4 my-4 w-full bg-gray-800'
      />
      <p className='font-bold text-lg text-red-500'>{errorMessage}</p>
      <button onClick={handleClick} 
      className='my-6 p-4 bg-red-700 w-full rounded-lg'>
        {isSignIn ? "Sign In" : "Sign Up"}
        </button>
      <p className=' py-4 cursor-pointer' onClick={toggleSignInForm}>
        {!isSignIn ? "New to Netflix? Sign Up Now" : "Already Registered. Sign In Now"}
        </p>
     </form>
    </div>
  )
}

export default Login