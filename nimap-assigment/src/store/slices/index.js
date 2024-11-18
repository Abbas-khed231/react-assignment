import { combineReducers } from '@reduxjs/toolkit';
import movieSlice from './moviesSlice';

const rootReducer = combineReducers({
  movies: movieSlice,
  
});

export default rootReducer;
