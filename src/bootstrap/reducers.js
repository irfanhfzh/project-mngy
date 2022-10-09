import { combineReducers } from "redux";
import initialStates from "./initialStates";
import * as ACTION from "./actions";

const reducers = (state = initialStates, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION.GET_TODOS:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTION.GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isInitialLoading: false,
        todoItems: payload,
      };
    case ACTION.GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        isInitialLoading: false,
        isInitialLoadingError: true,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({ todoItems: reducers });

export default rootReducers;
