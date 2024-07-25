import {useEffect}from 'react'
import { deleteUser, signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../Utils/userSlice';
import { AVATAR_LOGO, LOGO, SUPPORTED_LANGUAGES } from '../Utils/constants';
import { addToggleSearch } from '../Utils/gptSlice';
import { changeLanguage } from '../Utils/configSlice';



const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const toggleSearch = useSelector((store=>store.gpt.toggleSearch))
  const navigate = useNavigate();


  const handleSignOut = () => {
  
    signOut(auth).then(() => {
    
  // Sign-out successful.
}).catch((error) => {
      navigate("/error")
  // An error happened.
});

  };

  const handleGPTSearch = () => {
    dispatch(addToggleSearch())
   

  }
  
  const handleLanguageChange = (e) => {
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }

 
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
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex flex-col md:flex-row justify-between' >
      <img className="w-44 mx-auto md:mx-0" src={LOGO}
      alt='logo' />
     {user && (<div className='flex justify-between'>
      {toggleSearch &&
      <select className='p-2 m-2 bg-black text-white' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map(lang =>  <option key={lang.identifier} value={lang.identifier} >{lang.name}</option>)} 
      </select>}
      <button className='w-31 h-12  my-2 px-2 mx-4 bg-purple-800 text-white rounded-lg' onClick={handleGPTSearch}>
        {toggleSearch ?   "HomePage" : "GPT Search"}
        </button>
      <img className='hidden md:block w-12 h-12 my-2 ' src={AVATAR_LOGO} alt='logo'/>
      <button className=' h-12 mx-6 my-2 bg-red-700 rounded-lg' onClick={handleSignOut}>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header
