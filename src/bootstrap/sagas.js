import { call, put, takeEvery } from "redux-saga/effects";
import * as ACTION from "./actions";
import * as API from "./apis";

function* getTodosFetch() {
  // Call API
  const todos = yield call(API.getTodos);

  // Success
  yield put({ type: ACTION.GET_TODOS_SUCCESS, todos });
}

function* mySaga() {
  yield takeEvery(ACTION.GET_TODOS_FETCH, getTodosFetch);
}

export default mySaga;
