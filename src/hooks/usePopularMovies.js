import  { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPopularMovies } from '../Utils/moviesSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=>store.movies.nowPopularMovies);
  
    const getPopularMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)  
        const json = await data.json()
        // console.log(json.results)
        dispatch(addNowPopularMovies(json.results));
    }

    useEffect(()=>{
        if(!popularMovies) getPopularMovies();
    },[])
}

export default usePopularMovies;
