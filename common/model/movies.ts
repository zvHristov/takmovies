// model/user.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  AuthState, MoviesDataIF, MoviesIF } from '@/common/type/user';

const initialState: MoviesDataIF = {
  page: 0,
  results: [],
  total_results: 0,
  total_pages: 0,
  selectedSpot: {
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  },
};
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getCurrPopularMovies: (state, action: PayloadAction<MoviesDataIF>) => {
      state = {
       ...action.payload,
        selectedSpot: action.payload.results[0],
      };
      return state;
    },
    setSelectedMovieSpot: (state, action: PayloadAction<any>) => {
      state = {
        ...state,
         selectedSpot: action.payload,
       };
       return state;
    },
  },
});

export const { 
    getCurrPopularMovies,
    setSelectedMovieSpot,
 } = moviesSlice.actions;
export default moviesSlice.reducer;