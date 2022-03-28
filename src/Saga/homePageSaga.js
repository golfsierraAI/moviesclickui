import { takeLatest, all, fork, put, call } from "redux-saga/effects";
import {
  homePageDataLoadFail,
  homePageDataLoadSuccess,
  posterDataLoadFail,
  posterDataLoadSuccess,
  searchDataLoadFail,
  searchDataLoadSuccess,
} from "../HomePage/action";
import { dataLoader, movieSearch, posterLoader } from "../Api/apis";
function* getDataLoadWorker(payload) {
  try {
    const data = yield call(dataLoader, payload.payload);
    if (data) {
      yield put(homePageDataLoadSuccess(data));
    }
  } catch (error) {
    yield put(homePageDataLoadFail());
  }
}

function* getPosterLoadWorker(payload) {
  try {
    const data = yield call(posterLoader, payload.payload);
    if (data) {
      yield put(posterDataLoadSuccess(data));
    }
  } catch (error) {
    yield put(posterDataLoadFail());
  }
}

function* searchMovieWorker(payload) {
  try {
    const data = yield call(movieSearch, payload.payload);
    if (data) {
      yield put(searchDataLoadSuccess(data));
    }
  } catch (error) {
    yield put(searchDataLoadFail());
  }
}

function* homePageDataLoadWatcher() {
  yield takeLatest("LOAD_DATA", getDataLoadWorker);
}

function* posterLoadWatcher() {
  yield takeLatest("LOAD_POSTER", getPosterLoadWorker);
}

function* movieSearchWatcher() {
  yield takeLatest("LOAD_SEARCH", searchMovieWorker);
}

export default function* homePageSaga() {
  yield all(
    [homePageDataLoadWatcher, posterLoadWatcher, movieSearchWatcher].map(fork)
  );
}
