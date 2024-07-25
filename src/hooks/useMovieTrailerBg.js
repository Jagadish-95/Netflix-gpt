import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../Utils/moviesSlice';
import { API_OPTIONS } from '../Utils/constants';



const useMovieTrailerBg = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store=>store.movies.trailerVideo);
    
    const fetchMovieTrailer = async () =>  {
        const data = await fetch('https://api.themoviedb.org/3/movie/'
         + movieId + 
         '/videos?language=en-US',
          API_OPTIONS);
        const json = await data.json();
        // console.log(json)

        const filterData = json.results.filter(video=>video.type==="Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer))

    }

    useEffect(()=>{

       if(!trailerVideo)  fetchMovieTrailer()
    },[]);

}

export default useMovieTrailerBg;
