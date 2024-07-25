import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSuggetions from './GPTSuggetions'
import { BG_IMAGE } from '../Utils/constants'

const GPTSearch = () => {
  return (
    <>
    <div className='absolute -z-10'>
   <img className='' src={BG_IMAGE}
   alt='logo' />
     </div>
    <div>
      <GPTSearchBar/>
      <GPTSuggetions/>
    </div>
    </>
  )
}

export default GPTSearch
