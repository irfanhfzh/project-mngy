import * as ACTION from "./actions";

const reducers = (state = { todos: [] }, action) => {
  switch (action.type) {
    case ACTION.GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.todos,
      };
    default:
      return state;
  }
};

export default reducers;
