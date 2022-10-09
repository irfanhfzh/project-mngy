export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";
export const DELETE_TODOS = "DELETE_TODOS";

export const GET_USERS_TODOS = "GET_USERS_TODOS";
export const GET_USERS_TODOS_SUCCESS = "GET_USERS_TODOS_SUCCESS";
export const GET_USERS_TODOS_FAILED = "GET_USERS_TODOS_FAILED";
export const DELETE_USERS_TODOS = "DELETE_USERS_TODOS";

export const getTodo = (payload) => ({
  type: GET_TODOS,
  payload,
});
export const getTodoSuccess = (payload) => ({
  type: GET_TODOS_SUCCESS,
  payload,
});
export const getTodoFailed = (error) => ({
  type: GET_TODOS_FAILED,
  payload: error,
});
export const deleteTodos = () => ({
  type: DELETE_TODOS,
});

export const getUsersTodo = (payload) => ({
  type: GET_USERS_TODOS,
  payload,
});
export const getUsersTodoSuccess = (payload) => ({
  type: GET_USERS_TODOS_SUCCESS,
  payload,
});
export const getUsersTodoFailed = (error) => ({
  type: GET_USERS_TODOS_FAILED,
  payload: error,
});
export const deleteUsersTodo = () => ({
  type: DELETE_USERS_TODOS,
});
