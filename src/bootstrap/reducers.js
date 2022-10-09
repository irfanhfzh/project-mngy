import { combineReducers } from "redux";
import initialStates from "./initialStates";
import * as ACTION from "./actions";

const reducers = (state = initialStates, action) => {
  const { type, payload } = action;
  switch (type) {
    // Get ALL Todo Items
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
    case ACTION.DELETE_TODOS:
      return {
        ...state,
        todoItems: [],
      };
    // Get Todo Item from Users
    case ACTION.GET_USERS_TODOS:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTION.GET_USERS_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isInitialLoading: false,
        usersTodoItem: payload,
      };
    case ACTION.GET_USERS_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        isInitialLoading: false,
        isInitialLoadingError: true,
      };
    case ACTION.DELETE_USERS_TODOS:
      return {
        ...state,
        usersTodoItem: [],
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  todoItems: reducers,
  usersTodoItem: reducers,
});

export default rootReducers;
