/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movie",
	initialState: {
		popularMovies: {
			data: null,
			loading: false,
			error: null,
		},
		movieDetail: {
			data: null,
			loading: false,
			error: null,
		},
		castDetail: {
			data: null,
			loading: false,
			error: null,
		},
		upcomingMovies: {
			data: null,
			loading: false,
			error: null,
		},
		topRatedMovies: {
			data: null,
			loading: false,
			error: null,
		},
		searchedMovies: {
			data: null,
			loading: false,
			error: null,
		},
	},
	reducers: {
		getPopularMovies: (state, action) => {
			state.popularMovies.loading = true;
			state.popularMovies.data = null;
		},
		getPopularMoviesSuccess: (state, action) => {
			state.popularMovies.loading = false;
			state.popularMovies.data = action.payload;
		},
		getPopularMoviesFailure: (state, action) => {
			state.popularMovies.loading = false;
			state.popularMovies.error = action.payload;
		},
		getMovieDetail: (state, action) => {
			state.movieDetail.loading = true;
			state.movieDetail.data = null;
		},
		getMovieDetailSuccess: (state, action) => {
			state.movieDetail.loading = false;
			state.movieDetail.data = action.payload;
		},
		getMovieDetailFailure: (state, action) => {
			state.movieDetail.loading = false;
			state.movieDetail.error = action.payload;
		},
		getCastDetail: (state, action) => {
			state.castDetail.loading = true;
			state.castDetail.data = null;
		},
		getCastDetailSuccess: (state, action) => {
			state.castDetail.loading = false;
			state.castDetail.data = action.payload;
		},
		getCastDetailFailure: (state, action) => {
			state.castDetail.loading = false;
			state.castDetail.error = action.payload;
		},
		getUpcomingMovies: (state, action) => {
			state.upcomingMovies.loading = true;
			state.upcomingMovies.data = null;
		},
		getUpcomingMoviesSuccess: (state, action) => {
			state.upcomingMovies.loading = false;
			state.upcomingMovies.data = action.payload;
		},
		getUpcomingMoviesFailure: (state, action) => {
			state.upcomingMovies.loading = false;
			state.upcomingMovies.error = action.payload;
		},
		getTopRatedMovies: (state, action) => {
			state.topRatedMovies.loading = true;
			state.topRatedMovies.data = null;
		},
		getTopRatedMoviesSuccess: (state, action) => {
			state.topRatedMovies.loading = false;
			state.topRatedMovies.data = action.payload;
		},
		getTopRatedMoviesFailure: (state, action) => {
			state.topRatedMovies.loading = false;
			state.topRatedMovies.error = action.payload;
		},
		getSearchedMovies: (state, action) => {
			state.searchedMovies.loading = true;
			state.searchedMovies.data = null;
		},
		getSearchedMoviesSuccess: (state, action) => {
			state.searchedMovies.loading = false;
			state.searchedMovies.data = action.payload;
		},
		getSearchedMoviesFailure: (state, action) => {
			state.searchedMovies.loading = false;
			state.searchedMovies.error = action.payload;
		},
	},
});

export const {
	getPopularMovies,
	getPopularMoviesSuccess,
	getPopularMoviesFailure,
	getMovieDetail,
	getMovieDetailSuccess,
	getMovieDetailFailure,
	getCastDetail,
	getCastDetailSuccess,
	getCastDetailFailure,
	getUpcomingMovies,
	getUpcomingMoviesSuccess,
	getUpcomingMoviesFailure,
	getTopRatedMovies,
	getTopRatedMoviesSuccess,
	getTopRatedMoviesFailure,
	getSearchedMovies,
	getSearchedMoviesSuccess,
	getSearchedMoviesFailure,
} = movieSlice.actions;
export default movieSlice.reducer;
