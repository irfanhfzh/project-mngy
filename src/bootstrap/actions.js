export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";

export const getTodo = (isReset) => ({
  type: GET_TODOS,
  payload: isReset ? true : false,
});
export const getTodoSuccess = (payload) => ({
  type: GET_TODOS_SUCCESS,
  payload,
});
export const getTodoFailed = (error) => ({
  type: GET_TODOS_FAILED,
  payload: error,
});
