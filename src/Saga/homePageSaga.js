import { takeLatest, all, fork, put, call } from "redux-saga/effects";
import {
  homePageDataLoadFail,
  homePageDataLoadSuccess,
  posterDataLoadFail,
  posterDataLoadSuccess,
} from "../HomePage/action";
import { dataLoader, posterLoader } from "../Api/apis";
function* getDataLoadWorker() {
  try {
    const data = yield call(dataLoader);
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

function* homePageDataLoadWatcher() {
  yield takeLatest("LOAD_DATA", getDataLoadWorker);
}

function* posterLoadWatcher() {
  yield takeLatest("LOAD_POSTER", getPosterLoadWorker);
}

export default function* homePageSaga() {
  yield all([homePageDataLoadWatcher, posterLoadWatcher].map(fork));
}
