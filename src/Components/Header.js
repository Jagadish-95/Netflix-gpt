import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate();


  const handleSignOut = () => {
  
    signOut(auth).then(() => {
      navigate("/");
  // Sign-out successful.
}).catch((error) => {
      navigate("/error")
  // An error happened.
});

  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between' >
      <img className="w-44" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo' />
     {user && (<div className='flex'>
      <img className='w-12 h-12 my-2 ' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='logo'/>
      <button className=' h-12 mx-6 my-2 bg-red-700 ' onClick={handleSignOut}>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header
