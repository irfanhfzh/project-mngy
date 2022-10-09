import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { getTodoFailed, getTodoSuccess } from "./actions";
import * as API from "./apis";
import * as ACTION from "./actions";

function* getTodos() {
  try {
    const response = yield call(API.getTodoApi);
    yield put(getTodoSuccess(response?.data));
  } catch (error) {
    yield put(getTodoFailed(error.response?.data));
  }
}

function* getTodoSaga() {
  yield takeLatest(ACTION.GET_TODOS, getTodos);
}

const bootstrap = [fork(getTodoSaga)];

function* mySagas() {
  yield all([...bootstrap]);
}

export default mySagas;
