import React, {useEffect}from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../Utils/userSlice';
import { AVATAR_LOGO, LOGO } from '../Utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const navigate = useNavigate();


  const handleSignOut = () => {
  
    signOut(auth).then(() => {
    
  // Sign-out successful.
}).catch((error) => {
      navigate("/error")
  // An error happened.
});

  };

  useEffect(() => {

   const unSubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid : uid, 
          email : email, 
          displayName : displayName, 
          photoURL : photoURL}));

          navigate("/browse")
    
    
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unSubscribe();
    
         }, [])
      
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between' >
      <img className="w-44" src={LOGO}
      alt='logo' />
     {user && (<div className='flex'>
      <img className='w-12 h-12 my-2 ' src={AVATAR_LOGO} alt='logo'/>
      <button className=' h-12 mx-6 my-2 bg-red-700 ' onClick={handleSignOut}>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header;
