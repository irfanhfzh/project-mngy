import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import * as API from "./apis";
import * as ACTION from "./actions";

function* getTodos() {
  try {
    const response = yield call(API.getTodoApi);
    yield delay(1500);
    yield put(ACTION.getTodoSuccess(response?.data));
  } catch (error) {
    yield put(ACTION.getTodoFailed(error.response?.data));
  }
}
function* getUsersTodos({ payload }) {
  try {
    const usersResponse = yield call(API.getUsersTodoApi, payload);
    yield delay(1500);
    yield put(ACTION.getUsersTodoSuccess(usersResponse?.data));
  } catch (error) {
    yield put(ACTION.getUsersTodoFailed(error.usersResponse?.data));
  }
}

function* getTodoSaga() {
  yield takeLatest(ACTION.GET_TODOS, getTodos);
}
function* getUsersTodoSaga() {
  yield takeLatest(ACTION.GET_USERS_TODOS, getUsersTodos);
}

const bootstrap = [fork(getTodoSaga), fork(getUsersTodoSaga)];

function* mySagas() {
  yield all([...bootstrap]);
}

export default mySagas;
