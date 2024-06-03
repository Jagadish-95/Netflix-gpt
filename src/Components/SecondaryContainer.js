import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    movies.nowPlayingMovies && 
    (<div>
   <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
    <MovieList title={"Popular"} movies={movies.nowPopularMovies}/>
    <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
    </div>)
  )
}

export default SecondaryContainer;
