import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen pt-[20%] px-20 aspect-video absolute bg-gradient-to-r from-black'>
     <h1 className=' text-white my-2 font-bold text-xl md:text-3xl'>{title}</h1>
     <p className='hidden md:inline-block my-2 text-white w-1/4 '>{overview}</p>
     <div className=''>
        <button className='px-12 text-white bg-gray-700 m-2'>▶️Play</button>
        <button className='hidden md:inline-block px-12 text-white bg-gray-700 m-2' >More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle;
