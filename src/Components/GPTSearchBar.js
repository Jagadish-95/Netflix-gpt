import React, { useRef } from 'react'
import languages from '../Utils/languages';
import { useSelector } from 'react-redux';
import openai from '../Utils/openai';



const GPTSearchBar = () => {
  const searchRef = useRef(null);

  const langSearch = useSelector(store=>store.config.lang)

  const handleSearchButton = async() => {

    const gptQuery = "Act as Movie Recommendation System and some movies for the query" + 
    searchRef.current.value + 
    ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";

    console.log(searchRef.current.value);
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
      });
    console.log(gptResults.choices)
  }

  return (
  
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchRef} type='text' placeholder={languages[langSearch].gptSearchPlaceholder} className='col-span-9 p-4  m-4'/>
        <button className='col-span-3 py-2 px-4 m-4  bg-red-800 text-white rounded-lg' onClick={handleSearchButton}>
          {languages[langSearch].search}
          </button>
      </form>
    </div>
  )
}

export default GPTSearchBar;
