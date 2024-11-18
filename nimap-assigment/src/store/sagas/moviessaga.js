import { call, put, takeLatest } from "redux-saga/effects";
import {
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
} from "../slices/moviesSlice";
import {
	getPopularMoviesApi,
	getMovieDetailApi,
	getCastDetailApi,
	getUpcomingMoviesApi,
	getTopRatedMoviesApi,
	getSearchedMoviesApi,
} from "../apis";

function* getPopularMoviesSaga(action) {
	try {
		const res = yield call(getPopularMoviesApi, action.payload);
		if (res.status === 200) {
			yield put(getPopularMoviesSuccess(res.data)); 
		}
	} catch (error) {
		yield put(getPopularMoviesFailure(error.message)); 
	}
}

function* getMovieDetailSaga(action) {
	try {
		console.log("saga called: " + action);
		const res = yield call(getMovieDetailApi, action.payload);
		if (res.status === 200) {
			yield put(getMovieDetailSuccess(res.data)); 
		}
	} catch (error) {
		yield put(getMovieDetailFailure(error.message)); 
	}
}

function* getCastDetailSaga(action) {
	try {
		const res = yield call(getCastDetailApi, action.payload);
		if (res.status === 200) {
			yield put(getCastDetailSuccess(res.data)); 
		}
	} catch (error) {
		yield put(getCastDetailFailure(error.message)); 
	}
}

function* getUpcomingMoviesSaga(action) {
	try {
		const res = yield call(getUpcomingMoviesApi, action.payload);
		if (res.status === 200) {
			yield put(getUpcomingMoviesSuccess(res.data)); 
		}
	} catch (error) {
		yield put(getUpcomingMoviesFailure(error.message)); 
	}
}

function* getTopRatedMoviesSaga(action) {
	try {
		const res = yield call(getTopRatedMoviesApi, action.payload);
		if (res.status === 200) {
			yield put(getTopRatedMoviesSuccess(res.data)); 
		}
	} catch (error) {
		yield put(getTopRatedMoviesFailure(error.message)); 
	}
}

function* getSearchedMoviesSaga(action) {
	try {
		const res = yield call(getSearchedMoviesApi, action.payload);
		if (res.status === 200) {
			yield put(getSearchedMoviesSuccess(res.data)); 
		}
	} catch (error) {
		yield put(getSearchedMoviesFailure(error.message)); 
	}
}


function* movieSaga() {
	yield takeLatest(getPopularMovies.type, getPopularMoviesSaga);
	yield takeLatest(getMovieDetail.type, getMovieDetailSaga);
	yield takeLatest(getCastDetail.type, getCastDetailSaga);
	yield takeLatest(getUpcomingMovies.type, getUpcomingMoviesSaga);
	yield takeLatest(getTopRatedMovies.type, getTopRatedMoviesSaga);
	yield takeLatest(getSearchedMovies.type, getSearchedMoviesSaga);
}

export default movieSaga;
