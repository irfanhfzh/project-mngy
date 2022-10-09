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
      };
    case ACTION.GET_TODOS_SUCCESS:
      return {
        ...state,
        todoItems: payload,
      };
    case ACTION.GET_TODOS_FAILED:
      return {
        ...state,
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
      };
    case ACTION.GET_USERS_TODOS_SUCCESS:
      return {
        ...state,
        usersTodoItem: payload,
      };
    case ACTION.GET_USERS_TODOS_FAILED:
      return {
        ...state,
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
