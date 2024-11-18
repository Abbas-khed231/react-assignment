import { all } from 'redux-saga/effects';
import movieSaga from './moviessaga';

export default function* rootSaga() {
  yield all([
    movieSaga(), 
  ]);
}
