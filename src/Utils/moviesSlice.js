import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null ,
        trailerVideo : null ,
        nowPopularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        },
        addNowPopularMovies : (state, action) => {
            state.nowPopularMovies = action.payload
        },
        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload
        }
    }
});

export const {addNowPlayingMovies, addTrailerVideo, addNowPopularMovies, addTopRatedMovies, addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;