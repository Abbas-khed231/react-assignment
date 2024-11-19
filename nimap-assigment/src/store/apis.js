import axios from "../helper/axios";
import { API_KEY } from "../helper/constants";

const getPopularMoviesApi = async (payload) => {
	const { page = 1 } = payload;
	return axios.get("/movie/popular", {
		params: {
			api_key: API_KEY,
			language: "en-US",
			page: page,
		},
	});
};

const getMovieDetailApi = async (payload) => {
	const { movieId } = payload;
	return axios.get(`/movie/${movieId}`, {
		params: {
			api_key: API_KEY,
			language: "en-US",
		},
	});
};

const getCastDetailApi = async (payload) => {
	const { movieId } = payload;
	return axios.get(`/movie/${movieId}/credits`, {
		params: {
			api_key: API_KEY,
			language: "en-US",
		},
	});
};

const getUpcomingMoviesApi = async (payload) => {
	const { page = 1 } = payload;
	return axios.get("/movie/upcoming", {
		params: {
			api_key: API_KEY,
			language: "en-US",
			page: page,
		},
	});
};

const getTopRatedMoviesApi = async (payload) => {
	const { page = 1 } = payload;
	return axios.get("/movie/top_rated", {
		params: {
			api_key: API_KEY,
			language: "en-US",
			page: page,
		},
	});
};

const getSearchedMoviesApi = async (payload) => {
	const { page = 1, searchQuery } = payload;
	return axios.get("/search/movie", {
		params: {
			api_key: API_KEY,
			language: "en-US",
			query: searchQuery,
			page: page,
		},
	});
};

export {
	getPopularMoviesApi,
	getMovieDetailApi,
	getCastDetailApi,
	getUpcomingMoviesApi,
	getTopRatedMoviesApi,
	getSearchedMoviesApi,
};
